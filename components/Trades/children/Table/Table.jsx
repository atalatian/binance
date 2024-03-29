import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, pair, price, change, color) {
  return { id, pair, price, change, color};
}

const rows = [
  createData('d1', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
  createData('d2', 'BTC/USDT', `0.4956`, `-0.26%`, `#d23423`),
  createData('d3', 'BTC/USDT', `0.4956`, `-0.26%`, `#d23423`),
  createData('d4', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
  createData('d5', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
  createData('d6', 'BTC/USDT', `0.4956`, `-0.26%`, `#d23423`),
  createData('d7', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
  createData('d8', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
  createData('d9', 'BTC/USDT', `0.4956`, `-0.26%`, `#d23423`),
  createData('d10', 'BTC/USDT', `0.4956`, `-0.26%`, `#d23423`),
  createData('d11', 'BTC/USDT', `0.4956`, `+0.26%`, `#c0d223`),
];

const DenseTable = (props) => {
  return (
    <TableContainer
        className={`trades_table`}
      sx={{ backgroundColor: `#113264`, borderRadius: 0,
        maxHeight: `${(props.maxHeight ? `${props.maxHeight}px` : 'none')}`, }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: `#ffffff` }} align="left">Pair</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Price</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.pair}</TableCell>
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.price}</TableCell>
              <TableCell sx={{ color: row.color }} align="left">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;