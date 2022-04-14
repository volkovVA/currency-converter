import React from 'react';
import * as M from '@mui/material';
import Header from '../Header/Header';
import CurrencyBox from '../CurrencyBox/CurrencyBox';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <M.CssBaseline />
      <M.Container
        maxWidth="md"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Header />
        <CurrencyBox />
      </M.Container>
    </div>
  );
}

export default App;
