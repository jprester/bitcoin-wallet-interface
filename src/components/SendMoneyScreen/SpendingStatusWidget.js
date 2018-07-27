import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { displayFiatValue } from '../../utils/utils';
import styles from './_styles_SendMoneyScreen';

export const SpendingStatusWidget = (props) => {
  const { classes, btcAvailable, btcPrice } = props;

  return (
    <div className={classes.statusWidgetContainer}>
      <h2> My Current Balance </h2>

      <div className={classes.statusPanel}>
        <p className={classes.textLabel}>Bitcoin</p>
        <p className={classes.numberLabel}>{btcAvailable} BTC</p>
      </div>

      <div className={classes.statusPanel}>
        <p className={classes.textLabel}>Balance in usd</p>
        <p className={classes.numberLabel}>{displayFiatValue(btcPrice, btcAvailable)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  btcAvailable: state.transactionsData.btcAvailable,
  btcSent: state.transactionsData.btcSent,
  btcPrice: state.transactionsData.btcPrice,
});

const styledComponent = withStyles(styles)(SpendingStatusWidget);

export default connect(mapStateToProps)(styledComponent);

SpendingStatusWidget.propTypes = {
  btcAvailable: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
};
