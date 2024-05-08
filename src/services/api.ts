import currencyDetails from './currency-details';
import { CurrencyInfo }  from '../types/commonInterfaces';

type CurrencyResponse = {
  supported_codes: [string, string][];
};

export default class CurrencyService {
  private apiBase = 'https://v6.exchangerate-api.com/v6';
  private apiKey = '3f891308450eab0930250dba';

  private cachedSupportedCurrency: CurrencyResponse | null = null;

  private async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
      }
      const data = await response.json();
      return data as T;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
  }

  private async fetchSupportedCurrency() {
    const url = `${this.apiBase}/${this.apiKey}/codes`;
    return this.fetchData<CurrencyResponse>(url);
  }
  private async getSupportedCurrency() {
    if (this.cachedSupportedCurrency !== null) {
      return this.cachedSupportedCurrency;
    }

    const supportedCurrency = await this.fetchSupportedCurrency();
    this.cachedSupportedCurrency = supportedCurrency;
    return supportedCurrency;
  }

  private filterUnsupportedCurrencies(currencyData: CurrencyInfo[]) {
    const unsupportedCurrencies = ['Euro_', 'US Dollar_', 'British Pound Sterling_', 'Australian Dollar_'];
    return currencyData.filter(el => !unsupportedCurrencies.includes(el.currency.name));
  }

  private async getFilteredCurrency() {
    const currencyDetailsFiltered = this.filterUnsupportedCurrencies(currencyDetails);
    const supportedCurrency = await this.getSupportedCurrency();
    const supportedCurrencyCodes = supportedCurrency.supported_codes.map(el => el[0]);
    return currencyDetailsFiltered.filter(el => supportedCurrencyCodes.includes(el.currency.code));
  }

  async getConversion(base: string, target: string, amount: string) {
    const url = `${this.apiBase}/${this.apiKey}/pair/${base}/${target}/${amount}`;
    return this.fetchData(url);
  }

  async getExchangeRate(base: string, year: string, month: string, day: string, amount: string) {
    const url = `${this.apiBase}/${this.apiKey}/history/${base}/${year}/${month}/${day}/${amount}`;
    return this.fetchData(url);
  }

  async getCurrency() {
    return this.getFilteredCurrency();
  }
}
