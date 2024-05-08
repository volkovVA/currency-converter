import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment} from '@mui/material';


type Props = {
  symbol?: string;
  setAmount: (amount: string) => void;
}

const Amount: React.FC<Props> = ({ symbol, setAmount }) => {
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <FormControl sx={{ width: 120 }}>
      <InputLabel htmlFor="amount-input">Amount</InputLabel>
      <OutlinedInput
        id="amount-input"
        label="Amount"
        type="number"
        inputProps={{ min: 1 }}
        startAdornment={
          <InputAdornment position="start">
            {symbol}
          </InputAdornment>
        }
        onChange={handleAmountChange}
      />
    </FormControl>
  );
};

export default Amount;