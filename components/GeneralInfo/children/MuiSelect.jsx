import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'

export default function MuiSelect() {

  const reduxPair = useSelector(state => state);
  const [pair, setPair] = React.useState(reduxPair);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value === 'BTC/USDT'){
      dispatch({ type: 'GO_BTC/USDT' })
    }else if (event.target.value === 'BNB/BTC'){
      dispatch({ type: 'GO_BNB/BTC' })
    }
    setPair(event.target.value);
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
          sx={{ '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: `#FFB81C !important` },
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