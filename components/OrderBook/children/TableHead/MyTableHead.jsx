import Paper from '@mui/material/Paper'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import * as React from 'react'

const MyTableHead = () => {
  return(
    <TableContainer sx={{ backgroundColor: `#184890`, borderRadius: 0 }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: `#ffffff` }} align="left">Price(USDT)</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Amount(BTC)</TableCell>
            <TableCell sx={{ color: `#ffffff` }} align="left">Time</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default MyTableHead;