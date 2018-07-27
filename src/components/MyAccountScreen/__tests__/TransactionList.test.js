import React from 'react';
import { shallow } from 'enzyme';
import TransactionList from '../TransactionList';

const wrapper =
  shallow((<TransactionList classes={{ listItem: {} }} transactionList={[{ address: '1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb', amount: '1.2' }]} />));

describe('TransactionList', () => {
  it('should render TransactionList correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
