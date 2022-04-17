import * as types from '../constants';

const initialState = {
  currencyExchangeRate: null,
  loadingExchangeRate: true,
  errorExchangeRate: null,
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
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
        errorExchangeRate: action.payload,
      };
    }

    default:
      return state;
  }
};

export default exchangeReducer;
