import { CurrencyConversionInfo, CurrencyInfo } from '../types/commonInterfaces';

export const getName = (currency: CurrencyInfo[], conversion: CurrencyConversionInfo, code: string) => {
  const currencyData = currency.find(el => el.currency.code === conversion[code]);
  return currencyData ? currencyData.currency.name : '';
};