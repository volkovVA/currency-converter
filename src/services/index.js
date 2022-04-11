/* eslint-disable */
import currencyDetails from './currency-details';

export default class CurrencyService {
  apiBase = 'https://v6.exchangerate-api.com/v6';

  apiKey = '48b52c0f62ee36b70da06ee1';

  getExchangeRate = async () => {
    const result = await fetch(`${this.apiBase}/${this.apiKey}/latest/RUB`);

    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}, received ${result.status}`
      );
    }

    return result.json();
  };

  getCurrencyDetails = async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(currencyDetails);
      }, 100);
    });

    const result = await promise;

    return result;
  };

  transformCurrency = (result) => {
    const details = result[1].map((item) => {
      return {
        ...item,
        amount: result[0].conversion_rates[item.currency.code]
      };
    });

    return {
      ...result[0],
      details
    };
  };

  getCurrency = async () => {
    const result = await Promise.all([
      this.getExchangeRate(),
      this.getCurrencyDetails()
    ]);

    return this.transformCurrency(result);
  };
}
