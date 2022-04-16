import React from 'react';
import { useDispatch } from 'react-redux';
import * as M from '@mui/material';
import { fetchConversion } from '../../redux/actions';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const ConvertButton = ({ base, target, amount }) => {
  const dispatch = useDispatch();

  const getCurrency = () => {
    dispatch(fetchConversion(base.currency.code, target.currency.code, amount));
  };

  return (
    <M.Button
      variant="contained"
      size="large"
      endIcon={<CurrencyExchangeIcon />}
      onClick={getCurrency}
      sx={{ mt: 2 }}
      disabled={!(!!base && !!target && !!amount)}
    >
      Convert
    </M.Button>
  );
};

export default ConvertButton;
