import { Fragment } from 'react'
import { Stack, Typography } from '@mui/material'

const Titles = () => {
  return(
    <Fragment>
      <Stack sx={{ backgroundColor: `#2b4c7d`, p: 1 }} direction={`row`}>
        <Typography sx={{ color: `#ffffff` }} variant={`caption`}>
          Avbl
        </Typography>
        <Typography sx={{ color: `#ffffff`, margin: `auto !important`, mr: `0 !important` }}
                    fontWeight={`700`} variant={`body2`}>
          -USDT
        </Typography>
      </Stack>
    </Fragment>
  );
}

export default Titles;