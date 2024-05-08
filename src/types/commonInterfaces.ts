export interface CurrencyInfo {
  name: string;
  isoCode: string;
  phoneCode: string;
  flag?: {
    emoji: string;
    unicode: string;
  };
  currency: {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
  };
}

export interface CurrencyConversionInfo {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  amount: string;
  base_code: string;
  conversion_rate: number;
  conversion_result: number;
  target_code: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}

export interface ExchangeRateInfo {
  result: string;
  documentation: string;
  terms_of_use: string;
  year: number;
  month: number;
  day: number;
  base_code: string;
  conversion_amounts: {
    [currencyCode: string]: number;
  };
  requested_amount: number;
}