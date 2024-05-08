import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Box, Grid,  } from '@mui/material';

import { selectCurrency, selectLoadingCurrency, selectErrorCurrency } from '../../store/selectors/currencySelectors';
import { fetchCurrency } from '../../store/slices/currencySlice';

import Amount from '../Amount/Amount';
import AutocompleteContainer from '../Autocomplete/AutocompleteContainer';
import ConvertButton from '../ConvertButton/ConvertButton';
import ConverterOutput from '../ConverterOutput/ConverterOutput';
import ConverterTableContainer from '../ConverterTables/ConverterTableContainer';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const Converter: React.FC = () => {
  const dispatch = useDispatch();
  const [base, setBase] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');

  const { currency, loadingCurrency, errorCurrency } = useSelector((state) => ({
    currency: selectCurrency(state),
    loadingCurrency: selectLoadingCurrency(state),
    errorCurrency: selectErrorCurrency(state),
  }));

  useEffect(() => {
    if (!currency) {
      dispatch(fetchCurrency());
    }
  }, [currency, dispatch]);

  if (loadingCurrency) {
    return (
      <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
    );
  }

  if (errorCurrency) {
    return <ErrorIndicator />;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box component="form">
        <Grid container rowSpacing={2} spacing={1}>
          <Grid item xs={12} sm>
            <Amount symbol={symbol} setAmount={setAmount} />
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <AutocompleteContainer
              setSymbol={setSymbol}
              setBase={setBase}
              setTarget={setTarget}
            />
          </Grid>
          <Grid item xs={12} sm>
            <ConvertButton base={base} target={target} amount={amount} />
          </Grid>
        </Grid>
      </Box>
      <ConverterOutput />
      <ConverterTableContainer />
    </Box>
  );
}

export default Converter;
