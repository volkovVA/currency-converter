import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  currencySupported: null,
  currencyConversion: null,
  currencyExchangeRate: null,
  loadingCurrency: true,
  loadingConversion: true,
  loadingExchangeRate: true,
  error: null,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CURRENCY_REQUEST: {
      return {
        ...state,
        loadingCurrency: true,
      };
    }

    case types.FETCH_CURRENCY_SUCCESS: {
      return {
        ...state,
        currencySupported: action.payload,
        loadingCurrency: false,
      };
    }

    case types.FETCH_CURRENCY_FAILURE: {
      return {
        ...state,
        loadingCurrency: false,
        error: action.payload,
      };
    }

    case types.FETCH_CONVERSION_REQUEST: {
      return {
        ...state,
        loadingConversion: true,
      };
    }

    case types.FETCH_CONVERSION_SUCCESS: {
      return {
        ...state,
        currencyConversion: action.payload,
        loadingConversion: false,
      };
    }

    case types.FETCH_CONVERSION_FAILURE: {
      return {
        ...state,
        loadingConversion: false,
        error: action.payload,
      };
    }

    case types.FETCH_EXCHANGERATE_REQUEST: {
      return {
        ...state,
        loadingExchangeRate: true,
      };
    }

    case types.FETCH_EXCHANGERATE_SUCCESS: {
      return {
        ...state,
        currencyExchangeRate: action.payload,
        loadingExchangeRate: false,
      };
    }

    case types.FETCH_EXCHANGERATE_FAILURE: {
      return {
        ...state,
        loadingExchangeRate: false,
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
