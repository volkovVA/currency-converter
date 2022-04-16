import React from 'react';
import * as M from '@mui/material';
import Autocomplete from './Autocomplete';

const AutocompleteContainer = ({
  currencySupported,
  setSymbol,
  setBase,
  setTarget,
}) => {
  return (
    <M.Grid container spacing={1}>
      <M.Grid item xs={12} sm={12} md={6}>
        <Autocomplete
          currency={currencySupported}
          setSymbol={setSymbol}
          setBase={setBase}
        />
      </M.Grid>
      <M.Grid item xs={12} sm={12} md={6}>
        <Autocomplete currency={currencySupported} setTarget={setTarget} />
      </M.Grid>
    </M.Grid>
  );
};

export default AutocompleteContainer;
