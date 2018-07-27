import fetch from 'node-fetch';

import { coinApiAddress, coinApiKey, coinApiVersion } from './apiConfig';

export default async function getCryptoValue(cryptoType, fiatType) {
  const url = `${coinApiAddress}/${coinApiVersion}/exchangerate/${cryptoType}/${fiatType}`;

  const cryptoValuePromise = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-CoinAPI-Key': coinApiKey,
    },
  });

  const cryptoValue = await cryptoValuePromise.json();

  return cryptoValue.rate || '';
}
