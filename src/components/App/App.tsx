import React from 'react';
import { CssBaseline, Container } from '@mui/material';

import Header from '../Header/Header';
import CurrencyBox from '../CurrencyBox/CurrencyBox';

import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <CssBaseline />
      <Container maxWidth="md" className={styles.container}>
        <Header />
        <CurrencyBox />
      </Container>
    </div>
  );
}

export default App;