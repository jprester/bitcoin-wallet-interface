import { validateAddress } from '../utils';

test('validateAddress function should return false if the btc address is not valid', () => {
  const address = 'random';
  const result = validateAddress(address);

  expect(result).toBe(false);
});

test('validateAddress function should return true if the btc address is valid', () => {
  const address = '1JHwenDp9A98XdjfYkHKyiE3R99Q72K9X4';
  const result = validateAddress(address);

  expect(result).toBe(true);
});
