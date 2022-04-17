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

const rateRequested = () => ({
  type: types.FETCH_EXCHANGERATE_REQUEST,
});

const rateLoaded = (data) => ({
  type: types.FETCH_EXCHANGERATE_SUCCESS,
  payload: data,
});

const rateFailure = (error) => ({
  type: types.FETCH_EXCHANGERATE_FAILURE,
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

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const fetchExchangeRate =
  (base, year, month, day, amount) => async (dispatch) => {
    dispatch(rateRequested());
    const data = await currencyService.getExchangeRate(
      base,
      (year = yyyy),
      (month = mm),
      (day = dd),
      amount
    );
    try {
      dispatch(rateLoaded(data));
    } catch (error) {
      dispatch(rateFailure());
    }
  };

export { fetchCurrency, fetchConversion, fetchExchangeRate };
