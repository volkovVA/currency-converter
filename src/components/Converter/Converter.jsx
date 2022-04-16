import React, { useState } from 'react';
import * as M from '@mui/material';
import Amount from '../Amount/Amount';
import AutocompleteContainer from '../Autocomplete/AutocompleteContainer';
import ConvertButton from '../ConvertButton/ConvertButton';
import ConverterOutput from '../ConverterOutput/ConverterOutput';
import ConverterTableContainer from '../ConverterTables/ConverterTableContainer';

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
            <Amount symbol={symbol} setAmount={setAmount} />
          </M.Grid>
          <M.Grid item xs={12} sm={10} md={10}>
            <AutocompleteContainer
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
