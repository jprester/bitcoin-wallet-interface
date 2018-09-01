import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
  },
};

const date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} `;

console.log(date);

const TransactionListItem = props => (
  <li>
    <p className="list-item-info">
      <span className="list-item-info-date">{date}</span>
      <span className="list-item-info-arrow" />
      <span className="list-item-info-amount">{props.amount}</span>
    </p>
    <p className="list-item-address">{props.address}</p>
  </li>
);

export default withStyles(styles)(TransactionListItem);

TransactionListItem.propTypes = {
  amount: PropTypes.number,
  address: PropTypes.string,
};

TransactionListItem.defaultProps = {
  amount: 0,
  address: '',
};
