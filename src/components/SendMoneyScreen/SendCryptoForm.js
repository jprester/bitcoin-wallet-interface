import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

import { validateForm, displayFiatValue } from '../../utils/utils';
import { setWalletAddress, setAmount, addNewTransaction, setErrors, showTransactionForm, hideTransactionForm } from '../../actions';
import styles from './_styles_SendMoneyScreen';

const mobileBreakPoint = 768;

export class SendCryptoForm extends Component {
  constructor(props) {
    super(props);

    this.handleWalletAddressInput = this.handleWalletAddressInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleSendButtonClick = this.handleSendButtonClick.bind(this);

    // buttons on mobile screens
    this.handleShowTransactionFormClick = this.handleShowTransactionFormClick.bind(this);
    this.handleHideTransactionFormClick = this.handleHideTransactionFormClick.bind(this);
  }

  handleAmountInput(event) {
    const inputAmount = event.currentTarget.value;
    this.props.setAmount(inputAmount);
  }

  handleWalletAddressInput(event) {
    const inputAddress = event.currentTarget.value;
    this.props.setWalletAddress(inputAddress);
  }

  handleShowTransactionFormClick() {
    this.props.showTransactionForm();
  }

  handleHideTransactionFormClick() {
    this.props.hideTransactionForm();
  }

  handleSendButtonClick() {
    const newTransactionData = {
      address: this.props.transactionWalletAddress,
      amount: parseFloat(this.props.transactionAmount, 0),
    };

    const checkForm = validateForm(newTransactionData, this.props.btcAvailable);

    if (!checkForm || _.isEmpty(checkForm)) {
      this.resetForm();
      this.props.addNewTransaction(newTransactionData);
    } else {
      this.props.setErrors(checkForm);
    }
  }

  resetForm() {
    this.props.setErrors({});
    this.props.setWalletAddress('');
    this.props.setAmount();
  }

  // Render methods

  customizedInputs(classes) {
    return (
      <div className={classes.inputsContainer}>
        <FormControl className={classes.inputControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            className={classes.textInputLabel}
            htmlFor="custom-css-input"
          >
            BTC wallet address
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            onChange={this.handleWalletAddressInput}
            value={this.props.walletAddress}
            className={`${classes.textInput} ${classes.addressField}`}
            error={!!this.props.walletAddressFieldError}
            id="custom-css-input"
          />
          <p className={classes.errorMessage}>{this.props.walletAddressFieldError}</p>
        </FormControl>

        <FormControl className={classes.inputControl}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            className={classes.textInputLabel}
            htmlFor="custom-css-input"
          >
            BTC amount
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            className={`${classes.textInput} ${classes.amountField}`}
            onChange={this.handleAmountInput}
            value={this.props.amount}
            error={!!this.props.amountFieldError}
            id="custom-css-input"
          />
          <p className={classes.errorMessage}>{this.props.amountFieldError}</p>
        </FormControl>
      </div>
    );
  }

  renderMobileButtons(classes) {
    if (window.innerWidth < mobileBreakPoint && !this.props.formVisibleOnMobile) {
      return (
        <Button variant="outlined" size="medium" color="primary" classes={classes.buttonStyles} onClick={this.handleShowTransactionFormClick}>
        + New Transaction
        </Button>
      );
    } else if (window.innerWidth < mobileBreakPoint && this.props.formVisibleOnMobile) {
      return (
        <Button variant="outlined" size="medium" color="primary" classes={classes.buttonStyles} onClick={this.handleHideTransactionFormClick}>
          Cancel
        </Button>
      );
    }

    return '';
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        {this.renderMobileButtons(classes)}

        {(this.props.formVisibleOnMobile || window.innerWidth > mobileBreakPoint) &&
        <form className={classes.formContainer}>
          <h2 className={classes.formHeader}>Send Bitcoin</h2>

          {this.customizedInputs(classes)}

          <div className={classes.formFooter}>
            <p className={classes.transactionValueLabel}>
              Transaction value in USD:
              <span className={classes.transactionNumber}>
                {displayFiatValue(this.props.btcPrice, this.props.btcAvailable)}
              </span>
            </p>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSendButtonClick}>
              Send
            </Button>
          </div>
        </form> }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  transactionWalletAddress: state.transactionsData.walletAddress,
  transactionAmount: state.transactionsData.amount,
  btcAvailable: state.transactionsData.btcAvailable,
  walletAddressFieldError: state.transactionsData.walletAddressFieldError,
  amountFieldError: state.transactionsData.amountFieldError,
  formVisibleOnMobile: state.transactionsData.formVisibleOnMobile,
  btcPrice: state.transactionsData.btcPrice,
});

const mapDispatchToProps = dispatch => ({
  setWalletAddress: address => dispatch(setWalletAddress(address)),
  setAmount: amount => dispatch(setAmount(amount)),
  addNewTransaction: transactionData => dispatch(addNewTransaction(transactionData)),
  setErrors: checkForm => dispatch(setErrors(checkForm)),
  showTransactionForm: () => dispatch(showTransactionForm()),
  hideTransactionForm: () => dispatch(hideTransactionForm()),
});

const styledComponent = withStyles(styles)(SendCryptoForm);

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);

SendCryptoForm.propTypes = {
  transactionAmount: PropTypes.string,
  btcAvailable: PropTypes.number.isRequired,
  walletAddressFieldError: PropTypes.string,
  amountFieldError: PropTypes.string,
  setAmount: PropTypes.func.isRequired,
  addNewTransaction: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  formVisibleOnMobile: PropTypes.bool.isRequired,
};

SendCryptoForm.defaultProps = {
  transactionAmount: '',
  walletAddressFieldError: '',
  amountFieldError: '',
};

