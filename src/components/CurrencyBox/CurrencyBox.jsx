import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as M from '@mui/material';
import ConverterTabs from '../ConverterTabs/ConverterTabs';
import Converter from '../Converter/Converter';
import ExchangeRate from '../ExchangeRate/ExchangeRate';
import classes from './CurrencyBox.module.css';

function CurrencyBox() {
  return (
    <M.Box className={classes.currencyBox}>
      <BrowserRouter>
        <ConverterTabs />
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/exchange" element={<ExchangeRate />} />
        </Routes>
      </BrowserRouter>
    </M.Box>
  );
}

export default CurrencyBox;
