import configureStore from '../configureStore';

describe('configureStore', () => {
  it('should return correct store', () => {
    const store = configureStore();

    expect(store.getState()).toEqual({
      transactionsData: {
        amount: '',
        amountFieldError: '',
        walletAddress: '',
        walletAddressFieldError: '',
        formVisibleOnMobile: false,
        btcAvailable: 10,
        btcSent: 0,
        btcPrice: '',
        transactions: [],
      },
    });
  });
});
