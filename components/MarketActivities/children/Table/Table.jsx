import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead'
import { Button, Typography } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'


const rows = [
  {
    id: `d1`,
    pi_cls: [
      {id: `pair`, text: `ENC/BTC`, variant: `body2`},
      {id: `clock`, text: `14:39:07`, variant: `caption`},
    ],
    pe_txs: [
      {id: `percentage`, text: `+3.38%`, color: `rgb(14, 203, 129)`},
      {id: `text`, text: `New 24h High`, color: `#ffffff`},
    ],
    icon: <ArrowUpward/>,
    color: `rgb(14, 203, 129)`,
  },
  {
    id: `d2`,
    pi_cls: [
      {id: `pair`, text: `ENC/BTC`, variant: `body2`},
      {id: `clock`, text: `14:39:07`, variant: `caption`},
    ],
    pe_txs: [
      {id: `percentage`, text: `-3.38%`, color: `rgb(246, 70, 93)`},
      {id: `text`, text: `In 5 min`, color: `#ffffff`},
    ],
    icon: <ArrowDownward/>,
    color: `rgb(246, 70, 93)`,
  },
];

const BasicTable = () => {
  return (
    <TableContainer sx={{ backgroundColor: `#184890`, borderRadius: 0 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: `#ffffff` }} align="left">Market Activities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                {
                  row.pi_cls.map(pi_cl =>
                    <Typography key={pi_cl.id} component={`div`}
                                variant={`${pi_cl.variant}`} sx={{ color: `#ffffff` }} >
                      {pi_cl.text}
                    </Typography>
                  )
                }
              </TableCell>
              <TableCell align="left">
                {
                  row.pe_txs.map(pe_tx =>
                    <Typography key={pe_tx.id} component={`div`}
                                variant={`caption`} sx={{ color: pe_tx.color }}>
                      {pe_tx.text}
                    </Typography>
                  )
                }
              </TableCell>
              <TableCell align="left">
                <Button variant={`contained`} sx={{ backgroundColor: row.color }}>
                  {row.icon}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;