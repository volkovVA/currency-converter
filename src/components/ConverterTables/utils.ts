import { CurrencyInfo, CurrencyConversionInfo } from '../../types/commonInterfaces';

export const createData = (amount: number, calculation: number) => ({
  amount,
  calculation,
});

export const generateRows = (getNumberFunction: (amount: number) => number) => {
  const amounts = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000];

  return amounts.map((amount) => createData(amount, getNumberFunction(amount)));
};

export const getBaseNumber = (num: number, conversionRate: number) => {
  return parseFloat((num * conversionRate).toFixed(3));
};

export const getTargetNumber = (num: number, conversionRate: number) => {
  return parseFloat(((num * num) / (num * conversionRate)).toFixed(3));
};

export const getIsoCode = (currency: CurrencyInfo[], currencyCode: string)=> {
    const currencyData = currency.find((el) => el.currency.code === currencyCode);
    return currencyData?.isoCode;
};

export const getName = (currency: CurrencyInfo[], currencyConversion: CurrencyConversionInfo, currencyCode: string) => {
  const foundCurrency = currency.find(
    (el) => el.currency.code === currencyConversion[currencyCode]
  );
  return foundCurrency?.currency.name;
};