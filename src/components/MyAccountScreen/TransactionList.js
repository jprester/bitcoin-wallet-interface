import React from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const TransactionList = ({ transactionList, classes }) => {
  if (!transactionList.length) {
    return (
      <p> List is empty </p>
    );
  }

  return (transactionList.length &&
  <List>
    {transactionList.map(transaction => (
      <ListItem key={uniqueId('list-item')} dense disableGutters divider className={classes.listItem}>
        <ListItemText className={classes.transactionAdress} primary={transaction.address} />
        <ListItemSecondaryAction className={classes.transactionAmount}>
          {transaction.amount} BTC
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  );
};

export default TransactionList;


TransactionList.propTypes = {
  transactionList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

