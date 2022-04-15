import React, { useState } from 'react';
import * as M from '@mui/material';
import CurrencyAmount from '../CurrencyAmount/CurrencyAmount';
import AutocompleteContainer from '../CurrencyAutocomplete/AutocompleteContainer';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import CurrencyOutput from '../CurrencyOutput/CurrencyOutput';
import CurrencyTabs from '../CurrencyTabs/CurrencyTabs';

function CurrencyBox() {
  const [base, setBase] = useState('');
  const [target, setTarget] = useState('');
  const [symbol, setSymbol] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <M.Box
      sx={{
        mb: 6,
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 'rgb(35 55 80 / 30%) 0px 6px 12px',
        backgroundColor: '#fff',
      }}
    >
      <CurrencyTabs />
      <M.Box sx={{ p: 3 }}>
        <M.Box component="form" sx={{ mb: 8 }}>
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
      </M.Box>
    </M.Box>
  );
}

export default CurrencyBox;
