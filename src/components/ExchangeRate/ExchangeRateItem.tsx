import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { getFlagImage } from '../../utils/getFlagImage';

type Props = {
  isoCode: string;
  text: string;
  amount: string;
};

const ExchangeRateItem: React.FC<Props> = ({ isoCode, text, amount }) => {
  return (
    <ListItem sx={{ width: '25rem' }}>
      <ListItemAvatar>
        <Avatar sx={{ width: '54px', height: '54px' }}>
          <img
            loading="lazy"
            width="36"
            height="27"
            src={getFlagImage(isoCode)}
            alt=""
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={text} sx={{ textAlign: 'center' }} />
      <ListItemText
        primary={amount}
        sx={{
          '& > span': { textAlign: 'right', fontWeight: '500' },
        }}
      />
    </ListItem>
  );
}

export default ExchangeRateItem;
