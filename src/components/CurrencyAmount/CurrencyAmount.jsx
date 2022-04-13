import React from 'react';
import * as M from '@mui/material';

function CurrencyAmount({ symbol, setAmount }) {
  return (
    <M.FormControl>
      <M.InputLabel htmlFor="outlined-adornment-amount">Amount</M.InputLabel>
      <M.OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={
          <M.InputAdornment position="start">
            {symbol ? symbol.currency.symbol_native : ''}
          </M.InputAdornment>
        }
        label="Amount"
        type="number"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
    </M.FormControl>
  );
}

export default CurrencyAmount;
