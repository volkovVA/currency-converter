import currencyDetails from './currency-details';

type CurrencyResponse = {
  supported_codes: [string, string][];
};

interface CurrencyDetails {
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

export default class CurrencyService {
  #apiBase = 'https://v6.exchangerate-api.com/v6';
  #apiKey = '3f891308450eab0930250dba';

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
  }

  private async getSupportedCurrency() {
    const url = `${this.#apiBase}/${this.#apiKey}/codes`;
    return this.fetchData<CurrencyResponse>(url);
  }

  private filterUnsupportedCurrencies(currencyData: CurrencyDetails[]) {
    const unsupportedCurrencies = ['Euro_', 'US Dollar_', 'British Pound Sterling_', 'Australian Dollar_'];
    return currencyData.filter(el => !unsupportedCurrencies.includes(el.currency.name));
  }

  private async getFilteredCurrency() {
    const currencyDetailsFiltered = this.filterUnsupportedCurrencies(currencyDetails);
    const currencySupported = await this.getSupportedCurrency();
    const supportedCurrencyCodes = currencySupported.supported_codes.map(el => el[0]);
    return currencyDetailsFiltered.filter(el => supportedCurrencyCodes.includes(el.currency.code));
  }

  async getConversion(base: string, target: string, amount: number) {
    const url = `${this.#apiBase}/${this.#apiKey}/pair/${base}/${target}/${amount}`;
    return this.fetchData(url);
  }

  async getExchangeRate(base: string, year: number, month: number, day: number, amount: number) {
    const url = `${this.#apiBase}/${this.#apiKey}/history/${base}/${year}/${month}/${day}/${amount}`;
    return this.fetchData(url);
  }

  async getCurrency() {
    return this.getFilteredCurrency();
  }
}
