import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useReactiveVar } from '@apollo/client'
import { pairVar } from '../../../graphql/client/cache'

export default function MuiSelect() {

  const pair = useReactiveVar(pairVar)

  const handleChange = (event) => {
    if (event.target.value === 'BTC/USDT'){
      pairVar('BTC/USDT')
    }else if (event.target.value === 'BNB/BTC'){
      pairVar('BNB/BTC')
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{
          color: `#ffffff`,
          '&.Mui-focused': {color: `#ffffff`,}
        }}>Select Pair</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pair}
          sx={{ '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: `#d28c23 !important` },
            color: `#ffffff`,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: `rgb(255 255 255 / 23%) !important` },
            '& .MuiSvgIcon-root': {
              color: `#ffffff !important`
            }
          }}
          label="Select Pair"
          onChange={handleChange}
        >
          <MenuItem value={`BTC/USDT`}>BTC/USDT</MenuItem>
          <MenuItem value={`BNB/BTC`}>BNB/BTC</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}