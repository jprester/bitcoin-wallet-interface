import React from 'react';
import { shallow } from 'enzyme';
import { SendCryptoForm } from '../SendCryptoForm';

const props = {
  transactionAddress: '1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb',
  transactionAmount: '2.4',
  btcAvailable: 900,
  walletAddressFieldError: '',
  amountFieldError: '',
  setWalletAddress: jest.fn(),
  setAmount: jest.fn(),
  addNewTransaction: jest.fn(),
  formVisibleOnMobile: false,
  setErrors: jest.fn(),
  classes: {},
};

const wrapper = shallow((<SendCryptoForm {...props} />));

describe('index', () => {
  it('should render SendMoneyScreen correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
