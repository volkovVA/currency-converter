import React from 'react';
import * as M from '@mui/material';
import CurrencyHeader from '../CurrencyHeader/CurrencyHeader';
import CurrencyBox from '../CurrencyBox/CurrencyBox';
import CurrencyTables from '../CurrencyTables/CurrencyTables';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <M.CssBaseline />
      <M.Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <CurrencyHeader />
        <CurrencyBox />
        <CurrencyTables />
      </M.Container>
    </div>
  );
}

export default App;
