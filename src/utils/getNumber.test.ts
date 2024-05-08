import { getNumber } from './getNumber';
import { CurrencyConversionInfo } from '../types/commonInterfaces';

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

const currencyConversionWithFewerDecimalDigits: CurrencyConversionInfo = {
  result: 'success',
  documentation: 'https://www.exchangerate-api.com/docs',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1715194801,
  time_last_update_utc: 'Wed, 08 May 2024 19:00:01 +0000',
  amount: '1',
  base_code: 'USD',
  conversion_rate: 99.90,
  conversion_result: 99.90,
  target_code: 'EUR',
  time_next_update_unix: 1715198401,
  time_next_update_utc: 'Wed, 08 May 2024 20:00:01 +0000',
};

const currencyConversionWithNoDecimalPart: CurrencyConversionInfo = {
  result: 'success',
  documentation: 'https://www.exchangerate-api.com/docs',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1715194801,
  time_last_update_utc: 'Wed, 08 May 2024 19:00:01 +0000',
  amount: '1',
  base_code: 'USD',
  conversion_rate: 100,
  conversion_result: 100,
  target_code: 'EUR',
  time_next_update_unix: 1715198401,
  time_next_update_utc: 'Wed, 08 May 2024 20:00:01 +0000',
};

describe('getNumber', () => {
  test('returns an array of numbers from currencyConversion', () => {
    expect(getNumber(currencyConversion)).toEqual(['0', '93', '0158']);
  });

  test('handles conversion results with fewer decimal digits', () => {
    expect(getNumber(currencyConversionWithFewerDecimalDigits)).toEqual(['99', '90', '0000']);
  });

  test('handles conversion results with no decimal part', () => {
    expect(getNumber(currencyConversionWithNoDecimalPart)).toEqual(['100', '00', '0000']);
  });
});