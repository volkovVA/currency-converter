import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

import { getFlagImage } from '../../utils/getFlagImage';

type Row = {
  amount: number;
  calculation: number;
}

type Props = {
  leftName: string;
  leftFlag: string;
  rightName: string;
  rightFlag: string;
  leftCode: string;
  rightCode: string;
  rows: Row[];
}

const ConverterTable: React.FC<Props> = ({
  leftName,
  leftFlag,
  rightName,
  rightFlag,
  leftCode,
  rightCode,
  rows,
}) => {
  const tableStyles = {
    p: 1,
    m: 1,
    width: '23rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: 'rgb(35 55 80 / 30%) 0px 6px 12px',
  };

  return (
    <TableContainer component={Paper} sx={tableStyles}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={2}
              sx={{ border: '0', textAlign: 'center', fontSize: '1.2rem' }}
            >
              Convert {leftName} to {rightName}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img
                loading="lazy"
                width="36"
                height="27"
                src={getFlagImage(leftFlag)}
                alt="flag image"
              />
              <span>&nbsp;{leftCode}</span>
            </TableCell>
            <TableCell align="right">
              <img
                loading="lazy"
                width="36"
                height="27"
                src={getFlagImage(rightFlag)}
                alt="flag image"
              />
              <span>&nbsp;{rightCode}</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.amount}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.amount}
              </TableCell>
              <TableCell align="right">{row.calculation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ConverterTable;
