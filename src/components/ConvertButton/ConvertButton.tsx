import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { fetchConversion } from '../../store/slices/conversionSlice';

type Props = {
  base: string;
  target: string;
  amount: string;
}

const ConvertButton: React.FC<Props> = ({ base, target, amount }) => {
  const dispatch = useDispatch();

  const getCurrency = () => {
    dispatch(fetchConversion({ base, target, amount }));
  };

  const isDisabled = !base || !target || !amount;

  return (
    <Button
      variant="contained"
      size="large"
      endIcon={<CurrencyExchangeIcon />}
      onClick={(getCurrency)}
      sx={{ mt: 2 }}
      disabled={isDisabled}
    >
      Convert
    </Button>
  );
};

export default ConvertButton;
