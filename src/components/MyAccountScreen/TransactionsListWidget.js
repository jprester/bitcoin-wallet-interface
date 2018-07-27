import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TransactionList from './TransactionList';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 50,
    backgroundColor: theme.palette.background.paper,
  },

  transactionAdress: {
    fontSize: 11,
  },

  transactionAmount: {
    fontSize: 11,
  },
});

export const TransactionsListWidget = (props, classes) => (
  <div className={classes.root}>
    <h2> Transactions </h2>
    <TransactionList classes={classes} {...props} />
  </div>
);

const mapStateToProps = state => ({
  transactionList: state.transactionsData.transactions,
});

const styledComponent = withStyles(styles)(TransactionsListWidget);

export default connect(mapStateToProps)(styledComponent);

TransactionsListWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};
