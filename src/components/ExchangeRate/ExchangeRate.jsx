import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as M from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { fetchExchangeRate, fetchCurrency } from '../../redux/actions';
import Autocomplete from '../Autocomplete/Autocomplete';
import ExchangeRateItem from './ExchangeRateItem';
import Amount from '../Amount/Amount';
import classes from './ExchangeRate.module.css';

const ExchangeRate = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  };

  const dispatch = useDispatch();
  const [base, setBase] = useState('');
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState(1);
  const [search, setSeacrh] = useState('');
  const [date, setDate] = useState(getCurrentDate());

  const {
    currencySupported,
    currencyExchangeRate,
    loadingCurrency,
    loadingExchangeRate,
  } = useSelector((state) => state.currency);

  useEffect(() => {
    if (!currencySupported) {
      dispatch(fetchCurrency());
    }
  }, [currencySupported, dispatch]);

  const getExchangeRate = () => {
    dispatch(
      fetchExchangeRate(
        base.currency.code,
        value.split('-')[0],
        value.split('-')[1],
        value.split('-')[2],
        amount
      )
    );
  };

  if (loadingCurrency) {
    return (
      <M.CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
    );
  }

  const getDetailCurrencyWithAmount = () => {
    if (currencyExchangeRate && currencySupported) {
      return currencySupported
        .map((el) => {
          return {
            ...el,
            amount: currencyExchangeRate.conversion_amounts[el.currency.code],
          };
        })
        .filter((el) =>
          el.currency.name.toLowerCase().includes(search.toLowerCase())
        );
    }
  };

  return (
    <M.Box sx={{ p: 3 }}>
      <M.Grid container rowSpacing={2} spacing={1} sx={{ mb: 6 }}>
        <M.Grid item xs={12} sm={12} md={6}>
          <Autocomplete currency={currencySupported} setBase={setBase} />
        </M.Grid>
        <M.Grid item xs={12} sm={12} md>
          <M.TextField
            id="date"
            label="Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => {
              setValue(e.target.value);
              setDate(e.target.value);
            }}
          />
        </M.Grid>
        <M.Grid item xs={12} sm={12} md>
          <Amount setAmount={setAmount} />
        </M.Grid>
        <M.Grid item xs={12} sm={12} md>
          <M.Button
            variant="contained"
            size="large"
            endIcon={<HistoryIcon />}
            onClick={getExchangeRate}
            sx={{ mt: 2 }}
            disabled={!Boolean(base)}
          >
            get rate
          </M.Button>
        </M.Grid>
        <M.Grid item xs={12} sm={12} md>
          <M.TextField
            id="filled-search"
            label="Currency search field"
            type="search"
            variant="standard"
            sx={{ width: '88%', mt: 1 }}
            onChange={(e) => {
              setSeacrh(e.target.value);
            }}
          />
        </M.Grid>
      </M.Grid>
      {!loadingExchangeRate ? (
        <M.Box>
          <h1 className={classes.rateTitle}>
            Exchange Rate: {currencyExchangeRate.requested_amount}{' '}
            {currencyExchangeRate.base_code}
            {', '}
            {currencyExchangeRate.month}/{currencyExchangeRate.day}/
            {currencyExchangeRate.year}
          </h1>
          <M.List
            className={classes.rateList}
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
          </M.List>
        </M.Box>
      ) : null}
    </M.Box>
  );
};

export default ExchangeRate;
