import { CurrencyConversionInfo, CurrencyInfo } from '../../types/commonInterfaces';

export const getName = (currency: CurrencyInfo[], conversion: CurrencyConversionInfo, code: string) => {
  const currencyData = currency.find(el => el.currency.code === conversion[code]);
  return currencyData ? currencyData.currency.name : '';
};

export const formatDate = (utcDateString: string): string => {
  const regex = /^[A-Z][a-z]{2}, \d{2} [A-Z][a-z]{2} \d{4}/;
  const extractedDateString = utcDateString.match(regex);
  const formattedDateString = extractedDateString ? extractedDateString[0] : "Invalid date";
  return formattedDateString;
};

export const getNumber = (conversion: CurrencyConversionInfo) => {
  const conversionResult = conversion.conversion_result.toFixed(6);
  const [number1, number2] = conversionResult.split('.');
  return [number1, number2.slice(0, 2), number2.slice(2)];
};