import React from 'react';
import { useSelector } from 'react-redux';
import './CurrencyOutput.css';

function CurrencyOutput() {
  const { currencySupported, currencyConversion } = useSelector(
    (state) => state.currency
  );

  const getName = (code) => {
    return currencySupported.find(
      (el) => el.currency.code === currencyConversion[code]
    ).currency.name;
  };

  const getNumber = () => {
    const arrayOfNumber = currencyConversion.conversion_result
      .toFixed(6)
      .toString()
      .split('.');
    const number1 = arrayOfNumber[0];
    const number2 = [...arrayOfNumber[1]].slice(0, 2).join('');
    const number3 = [...arrayOfNumber[1]].slice(2).join('');

    return [number1, number2, number3];
  };

  if (currencyConversion) {
    return (
      <div className="output">
        <div>
          <p className="output-base">
            {currencyConversion.amount}.00&nbsp;{getName('base_code')}&nbsp;=
          </p>
          <p className="output-target">
            {getNumber()[0]}.{getNumber()[1]}
            <span className="output-number">{getNumber()[2]}&nbsp;</span>
            {getName('target_code')}
          </p>
        </div>
        <div className="output-info">
          <div className="output-one">
            <p>
              1&nbsp;{currencyConversion.base_code}&nbsp;=&nbsp;
              {currencyConversion.conversion_rate.toFixed(4)}&nbsp;
              {currencyConversion.target_code}
            </p>
            <p>
              1&nbsp;{currencyConversion.target_code}&nbsp;=&nbsp;
              {(1 / currencyConversion.conversion_rate).toFixed(4)}&nbsp;
              {currencyConversion.base_code}
            </p>
          </div>
          <div className="output-date">
            <span>{getName('base_code')} </span>to
            <span> {getName('target_code')}</span> conversion — Last updated
            {currencyConversion.time_next_update_utc
              .split(' ')
              .slice(0, -1)
              .join(' ')}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyOutput;
