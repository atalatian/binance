import { Fragment } from 'react'
import { Box, Button } from '@mui/material'

const Buttons = () => {
  return(
    <Fragment>
      <Box sx={{ backgroundColor: `#2b4c7d`, p: 1 }}>
        <Button sx={{ width: `100%` }} variant="contained">Log In or Register Now</Button>
      </Box>
    </Fragment>
  );

}

export default Buttons;