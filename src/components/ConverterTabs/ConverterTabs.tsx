import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

import styles from './ConverterTabs.module.css';

const CurrencyTabs: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      className={styles.tabs}
      sx={{ mb: 2 }}
    >
      <Tab
        label="Converter"
        to="/"
        component={Link}
        className={styles.tabsLink}
      />
      <Tab
        label="Exchange Rate"
        to="/exchange"
        component={Link}
        className={styles.tabsLink}
      />
    </Tabs>
  );
}

export default CurrencyTabs;
