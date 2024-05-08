import { getIsoCode } from './getIsoCode';
import { CurrencyInfo } from '../types/commonInterfaces';

const currency: CurrencyInfo[] = [
  {
    name: 'United States',
    isoCode: 'US',
    phoneCode: '1',
    flag: {
      emoji: '🇺🇸',
      unicode: 'U+1F1FA U+1F1F8',
    },
    currency: {
      symbol: '$',
      name: 'US Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'USD',
      name_plural: 'US dollars',
    },
  },
  {
    name: 'European Union',
    isoCode: 'EU',
    phoneCode: '32',
    flag: {
      emoji: '🇪🇺',
      unicode: 'U+1F1EA U+1F1FA',
    },
    currency: {
      symbol: '€',
      name: 'Euro',
      symbol_native: '€',
      decimal_digits: 2,
      rounding: 0,
      code: 'EUR',
      name_plural: 'euros',
    },
  },
];

describe('getIsoCode', () => {
  test('returns the ISO code for a given currency code', () => {
    expect(getIsoCode(currency, 'USD')).toBe('US');
    expect(getIsoCode(currency, 'EUR')).toBe('EU');
  });

  test('returns an empty string for an unknown currency code', () => {
    expect(getIsoCode(currency, 'JPY')).toBe('');
    expect(getIsoCode(currency, 'AUD')).toBe('');
  });
});