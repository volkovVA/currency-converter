import React from 'react';
import * as M from '@mui/material';
import Report from '@mui/icons-material/Report';

function ErrorIndicator() {
  return (
    <M.Card sx={{ minWidth: 275, textAlign: 'center' }}>
      <M.CardContent>
        <Report sx={{ fontSize: 80, color: '#ff0000' }} />
        <M.Typography
          sx={{ fontSize: 32, fontWeight: 500 }}
          color="text.secondary"
          gutterBottom
        >
          Error!!!
        </M.Typography>
        <M.Typography sx={{ fontSize: 20 }}>
          An error has occured while creating a page
        </M.Typography>
      </M.CardContent>
    </M.Card>
  );
}

export default ErrorIndicator;
