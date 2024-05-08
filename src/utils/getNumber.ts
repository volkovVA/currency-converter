import { CurrencyConversionInfo } from '../types/commonInterfaces';

export const getNumber = (conversion: CurrencyConversionInfo) => {
  const conversionResult = conversion.conversion_result.toFixed(6);
  const [number1, number2] = conversionResult.split('.');
  return [number1, number2.slice(0, 2), number2.slice(2)];
};