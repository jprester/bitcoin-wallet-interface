import reducer from '..';
import * as types from '../../actions/types';

describe('main reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      transactions: [],
      walletAddress: '',
      amount: '',
      walletAddressFieldError: '',
      amountFieldError: '',
      formVisibleOnMobile: false,
      btcAvailable: 10,
      btcSent: 0,
      btcPrice: '',
    });
  });

  it('should handle SET_WALLET_ADDRESS', () => {
    const action = { type: types.SET_WALLET_ADDRESS, payload: 'some address' };

    expect(reducer({}, action)).toEqual({ walletAddress: 'some address' });
  });

  it('should handle SET_AMOUNT', () => {
    const action = { type: types.SET_AMOUNT, payload: '1.4' };

    expect(reducer({}, action)).toEqual({ amount: '1.4' });
  });

  it('should handle SET_ERRORS', () => {
    const action = {
      type: types.SET_ERRORS,
      payload: {
        walletAddressFieldError: 'error1',
        amountFieldError: 'error2',
      },
    };

    expect(reducer({}, action)).toEqual({
      walletAddressFieldError: 'error1',
      amountFieldError: 'error2',
    });
  });

  it('should handle GET_CRYPTO_PRICE', () => {
    const action = {
      type: types.GET_CRYPTO_PRICE,
      payload: '8132',
    };

    expect(reducer({}, action)).toEqual({
      btcPrice: '8132',
    });
  });
});
