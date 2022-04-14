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

const currencyFailure = (error) => ({
  type: types.FETCH_CURRENCY_FAILURE,
  payload: error,
});

const conversionRequested = () => ({
  type: types.FETCH_CONVERSION_REQUEST,
});

const conversionLoaded = (data) => ({
  type: types.FETCH_CONVERSION_SUCCESS,
  payload: data,
});

const conversionFailure = (error) => ({
  type: types.FETCH_CONVERSION_FAILURE,
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

const fetchConversion = (base, target, amount) => async (dispatch) => {
  dispatch(conversionRequested());
  const data = await currencyService.getConversion(base, target, amount);
  const result = { ...data, amount: amount };
  try {
    dispatch(conversionLoaded(result));
  } catch (error) {
    dispatch(conversionFailure());
  }
};

export { fetchCurrency, fetchConversion };
