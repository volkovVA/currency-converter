import React from 'react';
import * as M from '@mui/material';

function Amount({ symbol, setAmount }) {
  return (
    <M.FormControl sx={{ width: 120 }}>
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

export default Amount;
