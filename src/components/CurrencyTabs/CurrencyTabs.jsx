import React, { useState } from 'react';
import * as M from '@mui/material';
import './CurrencyTabs.css';

function LinkTab(props) {
  return (
    <M.Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
      className="link"
    />
  );
}

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
      <LinkTab label="Page One" href="/drafts" />
      <LinkTab label="Page Two" href="/trash" />
    </M.Tabs>
  );
}

export default CurrencyTabs;
