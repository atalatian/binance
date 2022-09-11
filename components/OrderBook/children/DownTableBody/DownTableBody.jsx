import Paper from '@mui/material/Paper'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead'

function createData(id, price, amount, time, color) {
  return { id, price, amount, time, color};
}

const rows = [
  createData('d1', '58286', `0.27147`, `15,822.809`,),
  createData('d2', '58286', `0.27147`, `15,822.809`,),
  createData('d3', '58286', `0.27147`, `15,822.809`,),
  createData('d4', '58286', `0.27147`, `15,822.809`,),
  createData('d5', '58286', `0.27147`, `15,822.809`,),
  createData('d6', '58286', `0.27147`, `15,822.809`,),
  createData('d7', '58286', `0.27147`, `15,822.809`,),
  createData('d8', '58286', `0.27147`, `15,822.809`,),
  createData('d9', '58286', `0.27147`, `15,822.809`,),
  createData('d10', '58286', `0.27147`, `15,822.809`,),
  createData('d12', '58286', `0.27147`, `15,822.809`,),
  createData('d13', '58286', `0.27147`, `15,822.809`,),
  createData('d14', '58286', `0.27147`, `15,822.809`,),
  createData('d15', '58286', `0.27147`, `15,822.809`,),
];

const DownTableBody = (props) => {
  return(
    <TableContainer className={`orderBook_downTableBody`}
      sx={{ backgroundColor: `#113264`, borderRadius: 0, overflow: `auto`,
        maxHeight: `${(props.maxHeight ? `${props.maxHeight}px` : 'none')}`, }} component={Paper}>
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
              <TableCell sx={{ color: `#d23423` }} align="left">{row.price}</TableCell>
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.amount}</TableCell>
              <TableCell sx={{ color: `#ffffff` }} align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DownTableBody;