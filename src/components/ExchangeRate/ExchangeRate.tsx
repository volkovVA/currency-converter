import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, TextField, Button, List, CircularProgress } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

import { selectCurrency, selectLoadingCurrency, selectErrorCurrency } from '../../store/selectors/currencySelectors';
import { selectCurrencyExchangeRate, selectLoadingExchangeRate, selectErrorExchangeRate } from '../../store/selectors/exchangeRateSelectors';
import { fetchExchangeRate } from '../../store/slices/exchangeRateSlice';
import { fetchCurrency } from '../../store/slices/currencySlice';
import { getYesterdayDate } from '../../utils/getCurrentDate'

import Autocomplete from '../Autocomplete/Autocomplete';
import ExchangeRateItem from './ExchangeRateItem';
import Amount from '../Amount/Amount';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import styles from './ExchangeRate.module.css';

const ExchangeRate: React.FC = () => {
  const dispatch = useDispatch();
  const [base, setBase] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [search, setSeacrh] = useState<string>('');
  const [date, setDate] = useState<string>(getYesterdayDate());

  const { currency, loadingCurrency, errorCurrency } = useSelector((state) => ({
    currency: selectCurrency(state),
    loadingCurrency: selectLoadingCurrency(state),
    errorCurrency: selectErrorCurrency(state),
  }));

  const { currencyExchangeRate, loadingExchangeRate, errorExchangeRate } = useSelector((state) => ({
    currencyExchangeRate: selectCurrencyExchangeRate(state),
    loadingExchangeRate: selectLoadingExchangeRate(state),
    errorExchangeRate: selectErrorExchangeRate(state),
  }));

  useEffect(() => {
    if (!currency) {
      dispatch(fetchCurrency());
    }
  }, [currency, dispatch]);

  const getExchangeRate = () => {
    const [year, month, day] = date.split('-');

    dispatch(
      fetchExchangeRate({
        base,
        year,
        month,
        day,
        amount
      })
    );
  };

  const getDetailCurrencyWithAmount = () => {
    if (currencyExchangeRate && currency) {
      return currency
        .filter((el: { currency: { name: string; }; }) => el.currency.name.toLowerCase().includes(search.toLowerCase()))
        .map((el: { currency: { code: string | number; }; }) => ({
          ...el,
          amount: currencyExchangeRate.conversion_amounts[el.currency.code],
        }));
    }
  };

  const handleDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDate(e.target.value);
  };


  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSeacrh(e.target.value);
  };

  const today = new Date().toISOString().split('T')[0];

  const isDisabled = !base || !amount;

  if (loadingCurrency || loadingExchangeRate) {
    return (
      <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
    );
  }

  if (errorCurrency || errorExchangeRate) {
    return <ErrorIndicator />;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container rowSpacing={2} spacing={1} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Autocomplete setBase={setBase} />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <TextField
            id="date"
            name="date"
            label="Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={handleDateChange}
            InputProps={{
              inputProps: { max: today }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Amount setAmount={setAmount} />
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Button
            variant="contained"
            size="large"
            endIcon={<HistoryIcon />}
            onClick={getExchangeRate}
            sx={{ mt: 2 }}
            disabled={isDisabled}
          >
            get rate
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md>
          <TextField
            id="filled-search"
            label="Currency search field"
            type="search"
            variant="standard"
            sx={{ width: '88%', mt: 1 }}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
      {currencyExchangeRate ? (
        <Box>
          <h1 className={styles.rateTitle}>
            Exchange Rate: {currencyExchangeRate.requested_amount}{' '}
            {currencyExchangeRate.base_code}
            {', '}
            {currencyExchangeRate.month}/{currencyExchangeRate.day}/
            {currencyExchangeRate.year}
          </h1>
          <List
            className={styles.rateList}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {getDetailCurrencyWithAmount().map((el) => {
              const text = `${el.currency.code} — ${el.currency.name}`;
              const amount = `=${el.amount.toFixed(2)} ${el.currency.symbol}`;

              return (
                <ExchangeRateItem
                  isoCode={el.isoCode}
                  amount={amount}
                  text={text}
                  key={el.isoCode}
                />
              );
            })}
          </List>
        </Box>
      ) : null}
    </Box>
  );
};

export default ExchangeRate;
