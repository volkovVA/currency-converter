import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CurrencyInfo } from '../../types/commonInterfaces'
import CurrencyService from '../../services/api';

export interface CurrencyState {
  currency: CurrencyInfo[] | null;
  loadingCurrency: boolean;
  errorCurrency: string | null;
}

const currencyService = new CurrencyService();

export const fetchCurrency = createAsyncThunk<
  CurrencyInfo[],
  void,
  { rejectValue: string }
>(
  'currency/fetchCurrency',
  async (_,{ rejectWithValue }) => {
    try {
      const data = await currencyService.getCurrency();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: null,
    loadingCurrency: false,
    errorCurrency: null,
  } as CurrencyState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loadingCurrency = true;
        state.errorCurrency = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.currency = action.payload;
        state.loadingCurrency = false;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.loadingCurrency = false;
        state.errorCurrency = action.error.message;
      });
  },
});

export default currencySlice.reducer;
