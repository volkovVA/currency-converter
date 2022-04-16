import React from 'react';
import * as M from '@mui/material';
import Header from '../Header/Header';
import CurrencyBox from '../CurrencyBox/CurrencyBox';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.wrapper}>
      <M.CssBaseline />
      <M.Container maxWidth="md" className={classes.container}>
        <Header />
        <CurrencyBox />
      </M.Container>
    </div>
  );
}

export default App;
