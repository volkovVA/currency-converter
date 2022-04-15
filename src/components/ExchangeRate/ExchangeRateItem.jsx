import React from 'react';
import * as M from '@mui/material';

function ExchangeRateItem({ isoCode, text, amount }) {
  return (
    <M.ListItem sx={{ width: '25rem' }}>
      <M.ListItemAvatar>
        <M.Avatar sx={{ width: '54px', height: '54px' }}>
          <img
            loading="lazy"
            width="36"
            height="27"
            src={`https://flagcdn.com/36x27/${isoCode.toLowerCase()}.png`}
            alt=""
          />
        </M.Avatar>
      </M.ListItemAvatar>
      <M.ListItemText primary={text} sx={{ textAlign: 'center' }} />
      <M.ListItemText
        primary={amount}
        sx={{
          '& > span': { textAlign: 'right', fontWeight: '500' },
        }}
      />
    </M.ListItem>
  );
}

export default ExchangeRateItem;
