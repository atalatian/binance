import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, price, amount, time, color) {
  return { id, price, amount, time, color};
}

const rows = [
  createData('d1', '57,578.46', `0.4956`, `12:55:07`, `#c0d223`),
  createData('d2', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
  createData('d3', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
  createData('d4', '57,578.46', `0.4956`, `12:55:07`, `#c0d223`),
  createData('d5', '57,578.46', `0.4956`, `12:55:07`, `#c0d223`),
  createData('d6', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
  createData('d7', '57,578.46', `0.4956`, `12:55:07`, `#c0d223`),
  createData('d8', '57,578.46', `0.4956`, `12:55:07`, `#c0d223`),
  createData('d9', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
  createData('d10', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
  createData('d11', '57,578.46', `0.4956`, `12:55:07`, `#d23423`),
];

const DenseTable = (props) => {
  return (
    <TableContainer
    className={`market_table`}
        sx={{ backgroundColor: `#113264`, borderRadius: 0,
      maxHeight: `${(props.maxHeight ? `${props.maxHeight}px` : 'none')}`, }}
                    component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: `#ffffff` }} align="left">Price(USDT)</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Amount(BTC)</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: row.color }} align="left">{row.price}</TableCell>
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.amount}</TableCell>
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;