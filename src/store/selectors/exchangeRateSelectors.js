import { createSelector } from '@reduxjs/toolkit';

const selectExchangeRateState = (state) => state.exchange;

export const selectCurrencyExchangeRate = createSelector(
  selectExchangeRateState,
  (exchangeState) => exchangeState.currencyExchangeRate
);

export const selectLoadingExchangeRate = createSelector(
  selectExchangeRateState,
  (exchangeState) => exchangeState.loadingExchangeRate
);

export const selectErrorExchangeRate = createSelector(
  selectExchangeRateState,
  (exchangeState) => exchangeState.errorExchangeRate
);