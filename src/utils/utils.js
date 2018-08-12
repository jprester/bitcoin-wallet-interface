import React from 'react';
import _ from 'lodash';
import errorsTextData from './constants';

export const validateAddress = (address) => {
  const regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/; // eslint-disable-line no-useless-escape

  // BTC Address: 1JHwenDp9A98XdjfYkHKyiE3R99Q72K9X4
  // BTC Address: 1Unoc4af6gCq3xzdDFmGLpq18jbTW1nZD9
  // BTC Address: 1A8Ad7VbWDqwmRY6nSHtFcTqfW2XioXNmj
  // BTC Address: 12CZYvgNZ2ze3fGPFzgbSCELBJ6zzp2cWc
  // BTC Address: 17drmHLZMsCRWz48RchWfrz9Chx1osLe67

  return regex.test(String(address));
};

export const validateForm = (formData, btcAvailable) => {
  let errors = {};

  if (!formData || !_.isObject(formData) || _.isEmpty(formData)) {
    return _.merge({
      walletAddressFieldError: errorsTextData.address,
      amountFieldError: errorsTextData.noAmountData,
    }, errors);
  }

  if (!formData.address) {
    errors = _.merge({
      walletAddressFieldError: errorsTextData.noWalletAdressData,
    }, errors);
  }

  if (formData.address && !validateAddress(formData.address)) {
    errors = _.merge({
      walletAddressFieldError: errorsTextData.incorrectWalletAdress,
    }, errors);
  }

  if (!formData.amount) {
    errors = _.merge({
      amountFieldError: errorsTextData.noAmountData,
    }, errors);
  }

  if (formData.amount && (formData.amount > btcAvailable)) {
    errors = _.merge({
      amountFieldError: errorsTextData.moneyInsufficent,
    }, errors);
  }

  return errors;
};

export const displayFiatValue = (btcPrice, availableFunds) => {
  if (btcPrice && availableFunds) {
    return `${Math.floor(btcPrice * availableFunds)} $`;
  }

  if (btcPrice) {
    return `${Math.floor(btcPrice)} $ `;
  }

  return <span style={{ fontStyle: 'italic' }}> currently unavailable </span>;
};
