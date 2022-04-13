import CurrencyService from '../../services';
import * as types from '../constants';

const currencyService = new CurrencyService();

const currencyRequested = () => ({
  type: types.FETCH_CURRENCY_REQUEST,
});

const currencyLoaded = (data) => ({
  type: types.FETCH_CURRENCY_SUCCESS,
  payload: data,
});

const conversionLoaded = (data) => ({
  type: types.FETCH_CONVERSION_SUCCESS,
  payload: data,
});

const currencyFailure = (error) => ({
  type: types.FETCH_CURRENCY_FAILURE,
  payload: error,
});

const fetchCurrency = () => async (dispatch) => {
  dispatch(currencyRequested());
  const data = await currencyService.getCurrency();
  try {
    dispatch(currencyLoaded(data));
  } catch (error) {
    dispatch(currencyFailure(error));
  }
};

const fetchConversion = (base, target) => async (dispatch) => {
  dispatch(currencyRequested());
  const data = await currencyService.getConversion(base, target);
  try {
    dispatch(conversionLoaded(data));
  } catch (error) {
    dispatch(currencyFailure(error));
  }
};

export { fetchCurrency, fetchConversion };
