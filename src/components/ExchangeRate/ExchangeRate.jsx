import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as M from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { fetchExchangeRate } from '../../redux/actions';
import Autocomplete from '../Autocomplete/Autocomplete';
import ExchangeRateItem from './ExchangeRateItem';
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
  const [date, setDate] = useState(getCurrentDate());

  const { currencySupported, currencyExchangeRate, loadingCurrency } =
    useSelector((state) => state.currency);

  const getExchangeRate = () => {
    dispatch(
      fetchExchangeRate(
        base.currency.code,
        value.split('-')[0],
        value.split('-')[1],
        value.split('-')[2]
      )
    );
  };

  if (loadingCurrency) {
    return <h1>Loading...</h1>;
  }

  const getDetailCurrencyWithAmount = () => {
    if (currencyExchangeRate && currencySupported) {
      return currencySupported.map((el) => {
        return {
          ...el,
          amount: currencyExchangeRate.conversion_rates[el.currency.code],
        };
      });
    }
  };

  return (
    <M.Box sx={{ p: 3 }}>
      <M.Grid container rowSpacing={2} spacing={1} sx={{ mb: 6 }}>
        <M.Grid item xs={12} sm={12} md={6}>
          <Autocomplete currency={currencySupported} setBase={setBase} />
        </M.Grid>
        <M.Grid item xs={12} sm={12} md={6}>
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
          <M.Button
            variant="contained"
            size="large"
            endIcon={<HistoryIcon />}
            onClick={getExchangeRate}
            sx={{ mt: 2 }}
          >
            get rate
          </M.Button>
        </M.Grid>
      </M.Grid>
      {currencyExchangeRate ? (
        <M.Box>
          <h1 className={classes.rateTitle}>
            Exchange Rate: 1 {currencyExchangeRate.base_code}
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
