import React, { useState } from 'react';
import * as M from '@mui/material';

function CurrencyAutocompleteMain({ details }) {
  const [image, setImage] = useState('');

  const setInputImage = (value) =>
    value ? setImage(value.isoCode) : setImage('');

  let style;
  if (image) {
    let img = `https://flagcdn.com/36x27/${image.toLowerCase()}.png`;
    style = {
      background: `url(${img}) no-repeat 12px center`
    };
  } else {
    style = {
      background: 'none'
    };
  }

  return (
    <M.Autocomplete
      sx={{ width: 500 }}
      options={details}
      getOptionLabel={(option) =>
        `${option.currency.code} — ${option.currency.name}`
      }
      onChange={(_, value) => setInputImage(value)}
      renderOption={(props, option) => (
        <M.Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
          key={option.id}
        >
          <img
            loading="lazy"
            width="36"
            height="27"
            src={`https://flagcdn.com/36x27/${option.isoCode.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/72x54/${option.isoCode.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.currency.code} &mdash; {option.currency.name}
        </M.Box>
      )}
      renderInput={(params) => (
        <M.TextField
          {...params}
          label="Choose a currency"
          inputProps={
            image
              ? {
                  ...params.inputProps,
                  style: {
                    paddingLeft: '50px'
                  }
                }
              : {
                  ...params.inputProps
                }
          }
          style={style}
        />
      )}
    />
  );
}

export default CurrencyAutocompleteMain;
