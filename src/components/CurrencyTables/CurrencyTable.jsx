import React from 'react';
import * as M from '@mui/material';

function CurrencyTable({
  leftName,
  leftFlag,
  rightName,
  rightFlag,
  leftCode,
  rightCode,
  rows,
}) {
  return (
    <M.TableContainer component={M.Paper} sx={{ width: '44%', p: 1 }}>
      <M.Table size="small" aria-label="a dense table">
        <M.TableHead>
          <M.TableRow>
            <M.TableCell
              colSpan="2"
              sx={{ border: '0', textAlign: 'center', fontSize: '1.2rem' }}
            >
              Convert {leftName} to {rightName}
            </M.TableCell>
          </M.TableRow>
          <M.TableRow>
            <M.TableCell>
              <img
                loading="lazy"
                width="36"
                height="27"
                src={`https://flagcdn.com/36x27/${leftFlag.toLowerCase()}.png`}
                alt=""
              />
              <span>&nbsp;{leftCode}</span>
            </M.TableCell>
            <M.TableCell align="right">
              <img
                loading="lazy"
                width="36"
                height="27"
                src={`https://flagcdn.com/36x27/${rightFlag.toLowerCase()}.png`}
                alt=""
              />
              <span>&nbsp;{rightCode}</span>
            </M.TableCell>
          </M.TableRow>
        </M.TableHead>
        <M.TableBody>
          {rows.map((row) => (
            <M.TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <M.TableCell component="th" scope="row">
                {row.name}
              </M.TableCell>
              <M.TableCell align="right">{row.calories}</M.TableCell>
            </M.TableRow>
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}

export default CurrencyTable;
