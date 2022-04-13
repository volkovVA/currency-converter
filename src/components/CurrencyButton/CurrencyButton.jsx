import React from 'react';
import { useDispatch } from 'react-redux';
import * as M from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { fetchConversion } from '../../redux/actions';

const CurrencyButton = ({ base, target, amount }) => {
  const dispatch = useDispatch();

  const getCurrency = () => {
    dispatch(fetchConversion(base.currency.code, target.currency.code, amount));
  };

  return (
    <div>
      <M.Button
        variant="contained"
        size="large"
        endIcon={<CurrencyExchangeIcon />}
        onClick={getCurrency}
      >
        Convert
      </M.Button>
    </div>
  );
};

export default CurrencyButton;
