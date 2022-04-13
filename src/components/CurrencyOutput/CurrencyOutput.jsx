import React from 'react';
import { useSelector } from 'react-redux';

function CurrencyOutput({ amount }) {
  const { currencySupported, currencyConversion, loadingConversion } =
    useSelector((state) => state.currency);

  console.log(currencyConversion);

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

  console.log(getNumber());

  return (
    <div>
      <div>
        <span>{amount}.00&nbsp;</span>
        <span>{getName('base_code')}&nbsp;=</span>
      </div>
      <div>
        <span>{currencyConversion && getNumber()[0]}</span>
        <span>{currencyConversion && getNumber()[1]}&nbsp;</span>
        <span>{getName('target_code')}</span>
      </div>
      <div>
        <span>1 {currencyConversion && currencyConversion.base_code} =</span>
        <div>
          <span>
            {currencyConversion && currencyConversion.conversion_rate}
          </span>
          <span>{currencyConversion && currencyConversion.target_code}</span>
        </div>
      </div>
      <div>
        <span>1 {currencyConversion && currencyConversion.target_code} =</span>
        <div>
          <span>
            {currencyConversion &&
              (1 / currencyConversion.conversion_rate).toFixed(6)}
          </span>
          <span>{currencyConversion && currencyConversion.base_code}</span>
        </div>
      </div>
      <div>
        {getName('base_code')} to {getName('target_code')} conversion — Last
        updated{' '}
        {currencyConversion &&
          currencyConversion.time_next_update_utc
            .split(' ')
            .slice(0, -1)
            .join(' ')}
      </div>
    </div>
  );
}

export default CurrencyOutput;
