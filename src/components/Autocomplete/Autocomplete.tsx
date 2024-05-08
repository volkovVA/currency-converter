import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Autocomplete as MAutocomplete, Box, TextField } from '@mui/material';

import { selectCurrency } from '../../store/selectors/currencySelectors';
import { CurrencyInfo }  from '../../types/commonInterfaces';
import { getFlagImage } from '../../utils/getFlagImage';

import { AutocompleteProps } from './AutocompleteContainer';

const Autocomplete: React.FC<AutocompleteProps> = ({ setSymbol, setBase, setTarget }) => {
  const [image, setImage] = useState<string>('');

  const currency: CurrencyInfo[] = useSelector(selectCurrency);

  const style = {
    background: image ? `url(${getFlagImage(image)}) no-repeat 12px center` : 'none',
  };

  const handleAutocompleteChange = (value: CurrencyInfo) => {
    setImage(value.isoCode);
    setSymbol?.(value.currency.symbol_native);
    setBase?.(value.currency.code);
    setTarget?.(value.currency.code);
  };

  return (
    <MAutocomplete
      options={currency || []}
      getOptionLabel={(option) =>
        `${option.currency.code} — ${option.currency.name}`
      }
      onChange={(_, value: CurrencyInfo) => handleAutocompleteChange(value)}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
          key={option.isoCode}
        >
          <img
            loading="lazy"
            width="36"
            height="27"
            src={getFlagImage(option.isoCode)}
            alt="flag image"
          />
          {option.currency.code} &mdash; {option.currency.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a currency"
          inputProps={
            image
              ? {
                  ...params.inputProps,
                  style: {
                    paddingLeft: '50px',
                  },
                }
              : {
                  ...params.inputProps,
                }
          }
          style={style}
        />
      )}
    />
  );
}

export default Autocomplete;
