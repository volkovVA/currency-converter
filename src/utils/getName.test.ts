import { getName } from './getName';
import { CurrencyConversionInfo, CurrencyInfo } from '../types/commonInterfaces';

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

const currencyConversion: CurrencyConversionInfo = {
  result: 'success',
  documentation: 'https://www.exchangerate-api.com/docs',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1715194801,
  time_last_update_utc: 'Wed, 08 May 2024 19:00:01 +0000',
  amount: '1',
  base_code: 'USD',
  conversion_rate: 0.93015815,
  conversion_result: 0.93015815,
  target_code: 'EUR',
  time_next_update_unix: 1715198401,
  time_next_update_utc: 'Wed, 08 May 2024 20:00:01 +0000',
};

describe('getName', () => {
  test('returns the name of the currency for a given code', () => {
    expect(getName(currency, currencyConversion, 'base_code')).toBe('US Dollar');
    expect(getName(currency, currencyConversion, 'target_code')).toBe('Euro');
  });

  test('returns an empty string for unknown currency codes', () => {
    expect(getName(currency, currencyConversion, 'JPY')).toBe('');
    expect(getName(currency, currencyConversion, 'AUD')).toBe('');
  });
});