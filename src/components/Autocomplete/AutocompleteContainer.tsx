import React from 'react';
import { Grid } from '@mui/material';

import Autocomplete from './Autocomplete';

export type AutocompleteProps = {
  setSymbol?: (symbol: string) => void;
  setBase?: (base: string) => void;
  setTarget?: (target: string) => void;
}

const AutocompleteContainer: React.FC<AutocompleteProps> = ({
  setSymbol,
  setBase,
  setTarget,
}) => {
  return (
    <Grid container rowSpacing={2} spacing={1}>
      <Grid item xs={12} sm={12} md={6}>
        <Autocomplete
          setSymbol={setSymbol}
          setBase={setBase}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Autocomplete setTarget={setTarget} />
      </Grid>
    </Grid>
  );
};

export default AutocompleteContainer;
