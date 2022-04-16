import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as M from '@mui/material';
import classes from './ConverterTabs.module.css';

function CurrencyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_, value) => {
    setValue(value);
  };

  return (
    <M.Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      className={classes.tabs}
      sx={{ mb: 2 }}
    >
      <M.Tab label="Converter" to="/" component={Link} className="link" />
      <M.Tab
        label="Exchange Rate"
        to="/exchange"
        component={Link}
        className={classes.tabsLink}
      />
    </M.Tabs>
  );
}

export default CurrencyTabs;
