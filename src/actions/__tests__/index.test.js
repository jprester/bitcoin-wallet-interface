import * as actions from '..';
import * as types from '../types';

test('should create action to set bitcoin adress ', () => {
  const address = '1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb';

  const expectedAction = {
    type: types.SET_WALLET_ADDRESS,
    payload: address,
  };
  expect(actions.setWalletAddress(address)).toEqual(expectedAction);
});

test('should create action to set amount ', () => {
  const amount = '2.5';

  const expectedAction = {
    type: types.SET_AMOUNT,
    payload: amount,
  };
  expect(actions.setAmount(amount)).toEqual(expectedAction);
});

test('should create action to set errors ', () => {
  const errors = {
    walletAddressFieldError: 'error2',
    amountFieldError: 'error3',
  };

  const expectedAction = {
    type: types.SET_ERRORS,
    payload: errors,
  };
  expect(actions.setErrors(errors)).toEqual(expectedAction);
});

test('should create action for new transaction ', () => {
  const transaction = {
    walletAddress: '1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb',
    amount: '1.4',
  };

  const expectedAction = {
    type: types.ADD_NEW_TRANSACTION,
    payload: transaction,
  };
  expect(actions.addNewTransaction(transaction)).toEqual(expectedAction);
});

test('should get the current Bitcoin price ', () => {
  const price = '8147';

  const expectedAction = {
    type: types.GET_CRYPTO_PRICE,
    payload: price,
  };
  expect(actions.getCryptoPrice(price)).toEqual(expectedAction);
});
