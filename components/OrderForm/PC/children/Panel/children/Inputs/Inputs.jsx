import { Fragment } from 'react'
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Stack } from '@mui/material'

const inputsInfo = [
  {id: `i1`, name: `price`, placeHolder: `Price`, adornment: `USDT`},
  {id: `i2`, name: `amount`, placeHolder: `Amount`, adornment: `BTC`},
]

const Inputs = () => {
  const [values, setValues] = React.useState({
    price: '',
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <Fragment>
      <Stack sx={{ backgroundColor: `#0d274e`,}}>
        {
          inputsInfo.map(inputInfo =>
            <FormControl key={inputInfo.id} sx={{ p: 1,}} fullWidth variant="outlined">
              <OutlinedInput
                id={`outlined-adornment-${inputInfo.name}`}
                placeholder={`${inputInfo.placeHolder}`}
                sx={{ '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: `#d28c23 !important` },
                  color: `#ffffff`,
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: `#ffffff !important` },
                }}
                value={values[inputInfo.name]}
                onChange={handleChange(`${inputInfo.name}`)}
                endAdornment={<InputAdornment sx={{ '& .MuiTypography-root': { color: `#ffffff` } }}
                                              position="end">{inputInfo.adornment}</InputAdornment>}
                aria-describedby={`outlined-${inputInfo.name}-helper-text`}

                inputProps={{
                  'aria-label': `${inputInfo.name}`,
                }}
              />
            </FormControl>
          )
        }
      </Stack>
    </Fragment>
  );
}

export default Inputs;