import React, { useState, useEffect } from 'react';
import * as M from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, fetchConversion } from '../../redux/actions';
import CurrencyAutocompleteMain from '../CurrencyAutocomplete/CurrencyAutocompleteMain';
import CurrencyAutocompleteSecond from '../CurrencyAutocomplete/CurrencyAutocompleteSecond';
import CurrencyAmount from '../CurrencyAmount/CurrencyAmount';

function CurrencyBox() {
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const { currencySupported, currencyConversion, loading } = useSelector(
    (state) => state.currency
  );

  console.log(currencyConversion);

  const getCurrency = () => {
    setSymbol('');
    if (base && target) {
      dispatch(
        fetchConversion(base.currency.code, target.currency.code, amount)
      );
    }
  };

  useEffect(() => {
    if (!currencySupported) {
      dispatch(fetchCurrency());
    }
  }, [currencySupported, dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <CurrencyAmount symbol={symbol} setAmount={setAmount} />
      <CurrencyAutocompleteMain
        currency={currencySupported}
        setValue={setBase}
        setSymbol={setSymbol}
      />
      <CurrencyAutocompleteSecond
        currency={currencySupported}
        setValue={setTarget}
      />
      <M.Button
        variant="contained"
        size="large"
        endIcon={<CurrencyExchangeIcon />}
        onClick={getCurrency}
      >
        Convert
      </M.Button>
    </div>
  );
}

export default CurrencyBox;
