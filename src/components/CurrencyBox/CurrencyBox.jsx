import React, { useState, useEffect } from 'react';
import * as M from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useDispatch, useSelector } from 'react-redux';
import fetchCurrency from '../../redux/actions';
import CurrencyAutocompleteMain from '../CurrencyAutocomplete/CurrencyAutocompleteMain';
import CurrencyAutocompleteSecond from '../CurrencyAutocomplete/CurrencyAutocompleteSecond';

function CurrencyBox() {
  const [mainValue, setMainValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const dispatch = useDispatch();
  const { currency, loading } = useSelector((state) => state.currency);
  if (mainValue && secondValue) {
    console.log(mainValue.currency.code);
    console.log(secondValue.currency.code);
  }

  const getCurrency = () => {
    dispatch(fetchCurrency(mainValue.currency.code));
  };

  useEffect(() => {
    if (!currency) {
      dispatch(fetchCurrency());
    }
  }, [currency, dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <CurrencyAutocompleteMain currency={currency} setValue={setMainValue} />
      <CurrencyAutocompleteSecond
        currency={currency}
        setValue={setSecondValue}
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
