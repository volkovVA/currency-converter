import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CurrencyConversionInfo } from '../../types/commonInterfaces'
import CurrencyService from '../../services/api';

export interface ConversionState {
  currencyConversion: CurrencyConversionInfo | null;
  loadingConversion: boolean;
  errorConversion: string | null;
}

const currencyService = new CurrencyService();

export const fetchConversion = createAsyncThunk<
  CurrencyConversionInfo,
  {
    base: string;
    target: string;
    amount: string
  },
  { rejectValue: string }
>(
  'conversion/fetchConversion',
  async ({ base, target, amount }, { rejectWithValue }) => {
    try {
      const data = await currencyService.getConversion(base, target, amount) as CurrencyConversionInfo;
      const result = { ...data, amount: amount };
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const conversionSlice = createSlice({
  name: 'conversion',
  initialState: {
    currencyConversion: null,
    loadingConversion: false,
    errorConversion: null,
  } as ConversionState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversion.pending, (state) => {
        state.loadingConversion = true;
        state.errorConversion = null;
      })
      .addCase(fetchConversion.fulfilled, (state, action) => {
        state.currencyConversion = action.payload;
        state.loadingConversion = false;
      })
      .addCase(fetchConversion.rejected, (state, action) => {
        state.loadingConversion = false;
        state.errorConversion = action.error.message;
      });
  },
});

export default conversionSlice.reducer;
