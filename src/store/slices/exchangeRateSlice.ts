import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ExchangeRateInfo } from '../../types/commonInterfaces'
import CurrencyService from '../../services/api';

export interface ExchangeRateState {
  currencyExchangeRate: ExchangeRateInfo | null;
  loadingExchangeRate: boolean;
  errorExchangeRate: string | null;
}

const currencyService = new CurrencyService();

export const fetchExchangeRate = createAsyncThunk<
  ExchangeRateInfo,
  {
    base: string;
    year: string;
    month: string;
    day: string;
    amount: string
  },
  { rejectValue: string }
  >(
  'exchangeRate/fetchExchangeRate',
  async ({ base, year, month, day, amount }, { rejectWithValue }) => {
    try {
      const data = await currencyService.getExchangeRate(base, year, month, day, amount) as ExchangeRateInfo;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState: {
    currencyExchangeRate: null,
    loadingExchangeRate: false,
    errorExchangeRate: null,
  } as ExchangeRateState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.loadingExchangeRate = true;
        state.errorExchangeRate = null;
      })
      .addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.currencyExchangeRate = action.payload;
        state.loadingExchangeRate = false;
      })
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        state.loadingExchangeRate = false;
        state.errorExchangeRate = action.error.message;
      });
  },
});

export default exchangeRateSlice.reducer;
