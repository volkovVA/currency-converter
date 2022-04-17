import React from 'react';
import * as M from '@mui/material';
import { useSelector } from 'react-redux';
import ConverterTable from './ConverterTable';

const ConverterTableContainer = () => {
  const { currencySupported } = useSelector((state) => state.currency);
  const { currencyConversion, loadingConversion } = useSelector(
    (state) => state.conversion
  );

  const createData = (name, calories) => {
    return { name, calories };
  };

  const getBaseNumber = (num) => {
    const conversionRate =
      currencyConversion && currencyConversion.conversion_rate;
    return (num * conversionRate).toFixed(3);
  };

  const getTargetNumber = (num) => {
    const conversionRate =
      currencyConversion && currencyConversion.conversion_rate;
    return ((num * num) / (num * conversionRate)).toFixed(3);
  };

  const getIsoCode = (code) => {
    if (currencySupported && currencyConversion) {
      return currencySupported.find((el) => el.currency.code === code).isoCode;
    }
  };

  const getName = (code) => {
    if (currencySupported && currencyConversion) {
      return currencySupported.find(
        (el) => el.currency.code === currencyConversion[code]
      ).currency.name;
    }
  };

  const baseRows = [
    createData(1, getBaseNumber(1)),
    createData(5, getBaseNumber(5)),
    createData(10, getBaseNumber(10)),
    createData(25, getBaseNumber(25)),
    createData(50, getBaseNumber(50)),
    createData(100, getBaseNumber(100)),
    createData(500, getBaseNumber(500)),
    createData(1000, getBaseNumber(1000)),
    createData(5000, getBaseNumber(5000)),
    createData(10000, getBaseNumber(10000)),
    createData(50000, getBaseNumber(50000)),
  ];

  const targetRows = [
    createData(1, getTargetNumber(1)),
    createData(5, getTargetNumber(5)),
    createData(10, getTargetNumber(10)),
    createData(25, getTargetNumber(25)),
    createData(50, getTargetNumber(50)),
    createData(100, getTargetNumber(100)),
    createData(500, getTargetNumber(500)),
    createData(1000, getTargetNumber(1000)),
    createData(5000, getTargetNumber(5000)),
    createData(10000, getTargetNumber(10000)),
    createData(50000, getTargetNumber(50000)),
  ];

  if (!loadingConversion) {
    return (
      <M.Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <ConverterTable
          leftName={getName('base_code')}
          leftFlag={getIsoCode(currencyConversion.base_code)}
          rightName={getName('target_code')}
          rightFlag={getIsoCode(currencyConversion.target_code)}
          leftCode={currencyConversion.base_code}
          rightCode={currencyConversion.target_code}
          rows={baseRows}
        />
        <ConverterTable
          leftName={getName('target_code')}
          leftFlag={getIsoCode(currencyConversion.target_code)}
          rightName={getName('base_code')}
          rightFlag={getIsoCode(currencyConversion.base_code)}
          leftCode={currencyConversion.target_code}
          rightCode={currencyConversion.base_code}
          rows={targetRows}
        />
      </M.Box>
    );
  }
};

export default ConverterTableContainer;
