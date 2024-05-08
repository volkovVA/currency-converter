import { createSelector } from '@reduxjs/toolkit';

const selectConversionState = (state) => state.conversion;

export const selectCurrencyConversion = createSelector(
  selectConversionState,
  (conversionState) => conversionState.currencyConversion
);

export const selectLoadingConversion = createSelector(
  selectConversionState,
  (conversionState) => conversionState.loadingConversion
);

export const selectErrorConversion = createSelector(
  selectConversionState,
  (conversionState) => conversionState.errorConversion
);