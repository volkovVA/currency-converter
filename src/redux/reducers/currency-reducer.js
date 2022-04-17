import * as types from '../constants';

const initialState = {
  currencySupported: null,
  loadingCurrency: true,
  errorCurrencySupported: null,
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
        errorCurrencySupported: action.payload,
      };
    }

    default:
      return state;
  }
};

export default currencyReducer;
