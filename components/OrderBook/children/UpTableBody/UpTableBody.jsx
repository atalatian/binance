import Paper from '@mui/material/Paper'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Fragment } from 'react'
import { Link, Stack, Typography } from '@mui/material'

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

const UpTableBody = (props) => {
  return(
    <Fragment>
      <Stack sx={{ p: 1, backgroundColor: `#184890` }} direction={`row`} spacing={2} alignItems={`center`}>
        <Typography variant={`body1`} sx={{ color: `#ffffff` }}>
          58,254.74
        </Typography>
        <Typography variant={`caption`} sx={{ color: `#ffffff` }}>
          $58,254.74
        </Typography>
        <Link href={`#`} underline={`none`}
              sx={{
                color: `#ffffff`,
                margin: `auto !important`,
                marginRight: `0 !important`,
                '&:hover': {
                  color: `#FFB81C`
                }
              }}>
          <Typography variant={`caption`}>
            More
          </Typography>
        </Link>
      </Stack>
      <TableContainer
        sx={{ backgroundColor: `#184890`, borderRadius: 0,
          maxHeight: `${(props.maxHeight ? `${props.maxHeight}rem` : 'none')}`, }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: `rgb(14, 203, 129)` }} align="left">{row.price}</TableCell>
                <TableCell sx={{ color: `#ffffff` }} align="left">{row.amount}</TableCell>
                <TableCell sx={{ color: `#ffffff` }} align="left">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default UpTableBody;