import * as types from '../constants';

const initialState = {
  currencyConversion: null,
  loadingConversion: true,
  error: null,
};

const conversionReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default conversionReducer;
