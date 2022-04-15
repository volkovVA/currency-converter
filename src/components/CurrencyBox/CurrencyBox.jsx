import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as M from '@mui/material';
import CurrencyTabs from '../CurrencyTabs/CurrencyTabs';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

function CurrencyBox() {
  return (
    <M.Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 'rgb(35 55 80 / 30%) 0px 6px 12px',
        backgroundColor: '#fff',
      }}
    >
      <BrowserRouter>
        <CurrencyTabs />
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/exchange" element={<ExchangeRate />} />
        </Routes>
      </BrowserRouter>
    </M.Box>
  );
}

export default CurrencyBox;
