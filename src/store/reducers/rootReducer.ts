import { Reducer, combineReducers } from 'redux';

import currencyReducer, { CurrencyState } from '../slices/currencySlice';
import conversionReducer, { ConversionState } from '../slices/conversionSlice';
import exchangeRateReducer, { ExchangeRateState } from '../slices/exchangeRateSlice';


export interface RootState {
  currency: CurrencyState;
  conversion: ConversionState;
  exchange: ExchangeRateState;
}

export type RootReducer = ReturnType<typeof combineReducers>;

const rootReducer: Reducer<RootState> = combineReducers({
  currency: currencyReducer,
  conversion: conversionReducer,
  exchange: exchangeRateReducer,
});

export default rootReducer;
