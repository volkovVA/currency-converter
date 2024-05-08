import { createSelector } from '@reduxjs/toolkit';

const selectCurrencyState = (state) => state.currency;

export const selectCurrency = createSelector(
  selectCurrencyState,
  (currencyState) => currencyState.currency
);

export const selectLoadingCurrency = createSelector(
  selectCurrencyState,
  (currencyState) => currencyState.loadingCurrency
);

export const selectErrorCurrency = createSelector(
  selectCurrencyState,
  (currencyState) => currencyState.errorCurrency
);