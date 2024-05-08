import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Report } from '@mui/icons-material';

const ErrorIndicator: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275, textAlign: 'center' }}>
      <CardContent>
        <Report sx={{ fontSize: 80, color: '#ff0000' }} />
        <Typography
          sx={{ fontSize: 32, fontWeight: 500 }}
          color="text.secondary"
          gutterBottom
        >
          Error!!!
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          An error has occured while creating a page
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ErrorIndicator;
