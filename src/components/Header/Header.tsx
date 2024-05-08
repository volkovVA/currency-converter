import React from 'react';
import { Typography } from '@mui/material';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Typography variant="h1">Currency Converter</Typography>
      <Typography variant="body1">Check live foreign currency exchange rates</Typography>
    </div>
  );
};

export default Header;
