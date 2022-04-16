import React from 'react';
import * as M from '@mui/material';

function ConverterTable({
  leftName,
  leftFlag,
  rightName,
  rightFlag,
  leftCode,
  rightCode,
  rows,
}) {
  return (
    <M.TableContainer
      component={M.Paper}
      sx={{
        p: 1,
        width: '44%',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 'rgb(35 55 80 / 30%) 0px 6px 12px',
      }}
    >
      <M.Table size="small">
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

export default ConverterTable;
