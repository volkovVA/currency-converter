import { CurrencyInfo } from '../types/commonInterfaces';

export const getIsoCode = (currency: CurrencyInfo[], code: string)=> {
  const currencyData = currency.find((el) => el.currency.code === code);
  return currencyData ? currencyData.isoCode : '';
};
