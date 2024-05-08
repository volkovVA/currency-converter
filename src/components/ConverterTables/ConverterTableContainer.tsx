import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Box } from '@mui/material';

import { selectCurrency, selectErrorCurrency } from '../../store/selectors/currencySelectors';
import { selectCurrencyConversion, selectLoadingConversion, selectErrorConversion } from '../../store/selectors/conversionSelectors';
import { getBaseNumber, getTargetNumber, generateRows } from './utils/generateTable';
import { getName } from '../../utils/getName';
import { getIsoCode } from '../../utils/getIsoCode';

import ConverterTable from './ConverterTable';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const ConverterTableContainer: React.FC = () => {
  const { currency, errorCurrency } = useSelector((state) => ({
    currency: selectCurrency(state),
    errorCurrency: selectErrorCurrency(state),
  }));

  const { currencyConversion, loadingConversion, errorConversion } = useSelector((state) => ({
    currencyConversion: selectCurrencyConversion(state),
    loadingConversion: selectLoadingConversion(state),
    errorConversion: selectErrorConversion(state),
  }));

  const baseRows = currencyConversion && generateRows((num) => getBaseNumber(num, currencyConversion.conversion_rate));
  const targetRows = currencyConversion && generateRows((num) => getTargetNumber(num, currencyConversion.conversion_rate));

  if (loadingConversion) {
    return (
      <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
    );
  }

  if (errorCurrency || errorConversion) {
    return <ErrorIndicator />;
  }

  if (currencyConversion) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <ConverterTable
          leftName={getName(currency, currencyConversion, 'base_code')}
          leftFlag={getIsoCode(currency, currencyConversion.base_code)}
          rightName={getName(currency, currencyConversion, 'target_code')}
          rightFlag={getIsoCode(currency, currencyConversion.target_code)}
          leftCode={currencyConversion.base_code}
          rightCode={currencyConversion.target_code}
          rows={baseRows}
        />
        <ConverterTable
          leftName={getName(currency, currencyConversion, 'target_code')}
          leftFlag={getIsoCode(currency, currencyConversion.target_code)}
          rightName={getName(currency, currencyConversion, 'base_code')}
          rightFlag={getIsoCode(currency, currencyConversion.base_code)}
          leftCode={currencyConversion.target_code}
          rightCode={currencyConversion.base_code}
          rows={targetRows}
        />
      </Box>
    );
  }
};

export default ConverterTableContainer;
