import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ConverterTabs from '../ConverterTabs/ConverterTabs';
import Converter from '../Converter/Converter';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

import styles from './CurrencyBox.module.css';

const CurrencyBox: React.FC = () => {
  return (
    <Box className={styles.currencyBox}>
      <BrowserRouter>
        <ConverterTabs />
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/exchange" element={<ExchangeRate />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default CurrencyBox;
