import React from 'react';
import { useSelector } from 'react-redux';
import './CurrencyHeader.css';

const Header = () => {
  const { currencyConversion } = useSelector((state) => state.currency);

  return (
    <div className="header">
      {currencyConversion ? (
        <div className="header-box">
          <h1>
            Convert <span>{currencyConversion.amount} </span>
            <span>{currencyConversion.base_code}</span> to
            <span> {currencyConversion.target_code}</span>
          </h1>
          <p>Currency Converter</p>
        </div>
      ) : (
        <div className="header-box">
          <h1>Currency Converter</h1>
          <p>Check live foreign currency exchange rates</p>
        </div>
      )}
    </div>
  );
};

export default Header;
