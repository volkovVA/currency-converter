import React from 'react';
import { useSelector } from 'react-redux';
import './CurrencyOutput.css';

function CurrencyOutput() {
  const { currencySupported, currencyConversion } = useSelector(
    (state) => state.currency
  );

  const getName = (code) => {
    if (currencySupported && currencyConversion) {
      return currencySupported.find(
        (el) => el.currency.code === currencyConversion[code]
      ).currency.name;
    }
  };

  const getNumber = () => {
    if (currencyConversion) {
      const arrayOfNumber = [
        ...currencyConversion.conversion_result.toFixed(6).toString(),
      ];
      const number1 = arrayOfNumber.slice(0, 4).join('');
      const number2 = arrayOfNumber.slice(4).join('');
      return [number1, number2];
    }
  };

  return (
    <div className="output">
      <div>
        <p className="output-base">
          {currencyConversion && currencyConversion.amount}.00{' '}
          {getName('base_code')} =
        </p>
        <p className="output-target">
          {currencyConversion && getNumber()[0]}
          <span className="output-number">
            {currencyConversion && getNumber()[1]}{' '}
          </span>
          {getName('target_code')}
        </p>
      </div>
      <div className="output-info">
        <div className="output-one">
          <p>
            1 {currencyConversion && currencyConversion.base_code} ={' '}
            {currencyConversion &&
              currencyConversion.conversion_rate.toFixed(4)}{' '}
            {currencyConversion && currencyConversion.target_code}
          </p>
          <p>
            1 {currencyConversion && currencyConversion.target_code} ={' '}
            {currencyConversion &&
              (1 / currencyConversion.conversion_rate).toFixed(4)}{' '}
            {currencyConversion && currencyConversion.base_code}
          </p>
        </div>
        <div className="output-date">
          <span>{getName('base_code')}</span> to
          <span> {getName('target_code')}</span> conversion — Last updated
          {currencyConversion &&
            currencyConversion.time_next_update_utc
              .split(' ')
              .slice(0, -1)
              .join(' ')}
        </div>
      </div>
    </div>
  );
}

export default CurrencyOutput;
