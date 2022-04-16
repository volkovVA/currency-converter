import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Currency Converter</h1>
      <p>Check live foreign currency exchange rates</p>
    </div>
  );
};

export default Header;
