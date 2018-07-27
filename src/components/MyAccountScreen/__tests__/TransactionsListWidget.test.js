import React from 'react';
import { shallow } from 'enzyme';
import { TransactionsListWidget } from '../TransactionsListWidget';

const wrapper = shallow((<TransactionsListWidget classes={{}} transactionList={[{ name: 'name', email: 'email@email.com', amount: 9 }]} />));

describe('TransactionsListWidget', () => {
  it('should render TransactionsListWidget correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
