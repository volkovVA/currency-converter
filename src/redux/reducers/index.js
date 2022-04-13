import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  currencySupported: null,
  currencyConversion: null,
  loading: true,
  error: null,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CURRENCY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.FETCH_CURRENCY_SUCCESS: {
      return {
        ...state,
        currencySupported: action.payload,
        loading: false,
      };
    }

    case types.FETCH_CONVERSION_SUCCESS: {
      return {
        ...state,
        currencyConversion: action.payload,
        loading: false,
      };
    }

    case types.FETCH_CURRENCY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  currency: currencyReducer,
});
