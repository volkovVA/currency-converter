import { combineReducers } from 'redux';
import currencyReducer from './currency-reducer';
import conversionReducer from './conversion-reducer';
import exchangeReducer from './exchangeReducer';

export default combineReducers({
  currency: currencyReducer,
  conversion: conversionReducer,
  exchange: exchangeReducer,
});
