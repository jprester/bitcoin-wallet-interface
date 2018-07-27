import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startCoinFetch } from '../../actions/index';
import SendCryptoFormMain from './SendCryptoForm';
import SpendingStatusWidgetMain from './SpendingStatusWidget';
import PriceTrackerWidget from './PriceTrackerWidget';

export class SendMoneyScreen extends Component {
  componentDidMount() {
    this.props.startCoinFetch();
  }

  render() {
    return (
      <div className="content-block">
        <SendCryptoFormMain />
        <SpendingStatusWidgetMain />
        <PriceTrackerWidget btcPrice={this.props.btcPrice} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  btcPrice: state.transactionsData.btcPrice,
});

const mapDispatchToProps = dispatch => ({
  startCoinFetch: () => dispatch(startCoinFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyScreen);
