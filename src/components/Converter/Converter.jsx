import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as M from '@mui/material';
import { fetchCurrency } from '../../redux/actions';
import Amount from '../Amount/Amount';
import AutocompleteContainer from '../Autocomplete/AutocompleteContainer';
import ConvertButton from '../ConvertButton/ConvertButton';
import ConverterOutput from '../ConverterOutput/ConverterOutput';
import ConverterTableContainer from '../ConverterTables/ConverterTableContainer';

function CurrencyConverter() {
  const dispatch = useDispatch();
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  const { currencySupported, loadingCurrency } = useSelector(
    (state) => state.currency
  );

  useEffect(() => {
    if (!currencySupported) {
      dispatch(fetchCurrency());
    }
  }, [currencySupported, dispatch]);

  if (loadingCurrency) {
    return (
      <M.CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
    );
  }

  return (
    <M.Box sx={{ p: 3 }}>
      <M.Box component="form">
        <M.Grid container spacing={1}>
          <M.Grid item xs={12} sm>
            <Amount symbol={symbol} setAmount={setAmount} />
          </M.Grid>
          <M.Grid item xs={12} sm={10} md={10}>
            <AutocompleteContainer
              currencySupported={currencySupported}
              setSymbol={setSymbol}
              setBase={setBase}
              setTarget={setTarget}
            />
          </M.Grid>
          <M.Grid item xs={12} sm>
            <ConvertButton base={base} target={target} amount={amount} />
          </M.Grid>
        </M.Grid>
      </M.Box>
      <ConverterOutput />
      <ConverterTableContainer />
    </M.Box>
  );
}

export default CurrencyConverter;
