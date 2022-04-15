import React, { useState } from 'react';
import * as M from '@mui/material';
import CurrencyAmount from '../CurrencyAmount/CurrencyAmount';
import AutocompleteContainer from '../CurrencyAutocomplete/AutocompleteContainer';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import CurrencyOutput from '../CurrencyOutput/CurrencyOutput';
import CurrencyTables from '../CurrencyTables/CurrencyTables';

function CurrencyConverter() {
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <M.Box sx={{ p: 3 }}>
      <M.Box component="form">
        <M.Grid container spacing={1}>
          <M.Grid item xs={12} sm>
            <CurrencyAmount symbol={symbol} setAmount={setAmount} />
          </M.Grid>
          <M.Grid item xs={12} sm={10} md={10}>
            <AutocompleteContainer
              setSymbol={setSymbol}
              setBase={setBase}
              setTarget={setTarget}
            />
          </M.Grid>
          <M.Grid item xs={12} sm>
            <CurrencyButton base={base} target={target} amount={amount} />
          </M.Grid>
        </M.Grid>
      </M.Box>
      <CurrencyOutput />
      <CurrencyTables />
    </M.Box>
  );
}

export default CurrencyConverter;
