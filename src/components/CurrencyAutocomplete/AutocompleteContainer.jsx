import React, { useEffect } from 'react';
import * as M from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from '../../redux/actions';

import AutocompleteBase from './AutocompleteBase';
import AutocompleteTarget from './AutocompleteTarget';

const AutocompleteContainer = ({ setSymbol, setBase, setTarget }) => {
  const dispatch = useDispatch();
  const { currencySupported, loadingCurrency } = useSelector(
    (state) => state.currency
  );

  useEffect(() => {
    if (!currencySupported) {
      dispatch(fetchCurrency());
    }
  }, [currencySupported, dispatch]);

  if (loadingCurrency) {
    return <h1>Loading...</h1>;
  }

  return (
    <M.Grid container spacing={1}>
      <M.Grid item xs={12} sm={12} md={6}>
        <AutocompleteBase
          currency={currencySupported}
          setSymbol={setSymbol}
          setBase={setBase}
        />
      </M.Grid>
      <M.Grid item xs={12} sm={12} md={6}>
        <AutocompleteTarget
          currency={currencySupported}
          setTarget={setTarget}
        />
      </M.Grid>
    </M.Grid>
  );
};

export default AutocompleteContainer;
