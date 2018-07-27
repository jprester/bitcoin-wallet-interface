import { FETCH_TRANSACTIONS, ADD_NEW_TRANSACTION, SET_WALLET_ADDRESS, SET_AMOUNT, SET_ERRORS, SHOW_TRANSACTION_FORM, HIDE_TRANSACTION_FORM, GET_CRYPTO_PRICE } from '../actions/types';

const INITIAL_STATE = {
  transactions: [],
  amount: '',
  walletAddress: '',
  walletAddressFieldError: '',
  amountFieldError: '',
  btcAvailable: 10,
  btcSent: 0,
  formVisibleOnMobile: false,
  btcPrice: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return state;

    case SET_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: action.payload,
      };

    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    case SET_ERRORS:
      return {
        ...state,
        walletAddressFieldError: action.payload.walletAddressFieldError,
        amountFieldError: action.payload.amountFieldError,
      };

    case ADD_NEW_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        btcAvailable: state.btcAvailable - action.payload.amount,
        btcSent: state.btcSent + action.payload.amount,
      };

    case SHOW_TRANSACTION_FORM:
      return {
        ...state,
        formVisibleOnMobile: true,
      };

    case HIDE_TRANSACTION_FORM:
      return {
        ...state,
        formVisibleOnMobile: false,
      };

    case GET_CRYPTO_PRICE:
      return {
        ...state,
        btcPrice: action.payload,
      };

    default:
      return state;
  }
};
