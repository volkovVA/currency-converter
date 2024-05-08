import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { selectCurrency, selectErrorCurrency } from '../../store/selectors/currencySelectors';
import { selectCurrencyConversion, selectLoadingConversion, selectErrorConversion } from '../../store/selectors/conversionSelectors';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import { getName, formatDate, getNumber } from './utils';
import styles from './ConverterOutput.module.css';

const ConverterOutput: React.FC = () => {
  const { currency, errorCurrency } = useSelector((state) => ({
    currency: selectCurrency(state),
    errorCurrency: selectErrorCurrency(state),
  }));

  const { currencyConversion, loadingConversion, errorConversion } = useSelector((state) => ({
    currencyConversion: selectCurrencyConversion(state),
    loadingConversion: selectLoadingConversion(state),
    errorConversion: selectErrorConversion(state),
  }));

  if (loadingConversion) {
    return <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />;
  }

  if (errorCurrency || errorConversion) {
    return <ErrorIndicator />;
  }

  if (currencyConversion) {
    return (
      <div className={styles.output}>
        <div>
          <p className={styles.outputBase}>
            {currencyConversion.amount}.00&nbsp;{getName(currency, currencyConversion, 'base_code')}&nbsp;=
          </p>
          <p className={styles.outputTarget}>
            {getNumber(currencyConversion)[0]}.{getNumber(currencyConversion)[1]}
            <span className={styles.outputNumber}>{getNumber(currencyConversion)[2]}&nbsp;</span>
            {getName(currency, currencyConversion, 'target_code')}
          </p>
        </div>
        <div className={styles.outputInfo}>
          <div className={styles.outputOne}>
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
          <div className={styles.outputDate}>
            <span>{getName(currency, currencyConversion, 'base_code')} </span>to
            <span> {getName(currency, currencyConversion, 'target_code')}</span> conversion — Last updated
            {formatDate(currencyConversion.time_last_update_utc)}
          </div>
        </div>
      </div>
    );
  }
}

export default ConverterOutput;
