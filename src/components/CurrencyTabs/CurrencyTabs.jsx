import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as M from '@mui/material';
import './CurrencyTabs.css';

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
      sx={{
        mb: 2,
        backgroundColor: '#1976d2',
        color: '#fff',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <M.Tab label="Converter" to="/" component={Link} className="link" />
      <M.Tab
        label="Exchange Rate"
        to="/exchange"
        component={Link}
        className="link"
      />
    </M.Tabs>
  );
}

export default CurrencyTabs;
