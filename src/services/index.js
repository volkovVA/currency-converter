import currencyDetails from './currency-details';

export default class CurrencyService {
  apiBase = 'https://v6.exchangerate-api.com/v6';

  apiKey = 'c38e8ef6b1bbf0b783c814f2';

  getSupportedCurrency = async () => {
    const result = await fetch(`${this.apiBase}/${this.apiKey}/codes`);

    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}, received ${result.status}`
      );
    }

    return result.json();
  };

  getConversion = async (base, target) => {
    const result = await fetch(
      `${this.apiBase}/${this.apiKey}/pair/${base}/${target}`
    );

    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}, received ${result.status}`
      );
    }

    return result.json();
  };

  transformCurrency = (x, y) => {
    const list = y.supported_codes.map((el) => el[0]);
    return x.reduce((acc, el) => {
      if (list.indexOf(el.currency.code) !== -1) {
        acc.push(el);
      }
      return acc;
    }, []);
  };

  getCurrency = async () => {
    const currencySupported = await this.getSupportedCurrency();

    return this.transformCurrency(currencyDetails, currencySupported);
  };
}
