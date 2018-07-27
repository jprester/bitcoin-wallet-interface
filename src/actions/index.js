import getCryptoValue from '../services/apiServices';
import { FETCH_TRANSACTIONS, ADD_NEW_TRANSACTION, SET_WALLET_ADDRESS, SET_AMOUNT, SET_ERRORS, SHOW_TRANSACTION_FORM, HIDE_TRANSACTION_FORM, GET_CRYPTO_PRICE } from './types';

export const loadTransactions = () => ({
  type: FETCH_TRANSACTIONS,
});

export const setWalletAddress = address => ({
  type: SET_WALLET_ADDRESS,
  payload: address,
});

export const setAmount = amount => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setErrors = errors => ({
  type: SET_ERRORS,
  payload: errors,
});

export const addNewTransaction = transactionData => ({
  type: ADD_NEW_TRANSACTION,
  payload: transactionData,
});

export const showTransactionForm = () => ({
  type: SHOW_TRANSACTION_FORM,
});

export const hideTransactionForm = () => ({
  type: HIDE_TRANSACTION_FORM,
});

export const getCryptoPrice = response => ({
  type: GET_CRYPTO_PRICE,
  payload: response,
});

export const startCoinFetch = () => dispatch => getCryptoValue('BTC', 'USD')
  .then((response) => {
    dispatch(getCryptoPrice(response));
  })
  .catch((error) => {
    console.log(error);
  });

