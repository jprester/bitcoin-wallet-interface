import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import TransactionListItem from './TransactionListItem';

const TransactionList = ({ transactionList, classes }) => {
  if (!transactionList.length) {
    return <p> List is empty </p>;
  }

  return (
    transactionList.length && (
      <ul>
        {transactionList.map(transaction => (
          <TransactionListItem
            key={uniqueId('list-item')}
            className={classes.listItem}
            amount={transaction.amount}
            address={transaction.address}
          />
        ))}
      </ul>
    )
  );
};

export default TransactionList;

TransactionList.propTypes = {
  transactionList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({}).isRequired,
};
