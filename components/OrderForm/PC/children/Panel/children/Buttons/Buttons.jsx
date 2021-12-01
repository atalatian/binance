import { Fragment } from 'react'
import { Box, Button, Typography } from '@mui/material'

const Buttons = () => {
  return(
    <Fragment>
      <Box sx={{ backgroundColor: `#0d274e`, p: 1 }}>
        <Button sx={{ width: `100%`, backgroundColor: `#143d7a`,
          '&:hover': { backgroundColor: `#143d7a` } }} variant="contained">
          <Typography sx={{ color: `#d28c23`, ml: 1, mr: 1 }}>Log In</Typography>
          or <Typography sx={{ color: `#d28c23`, ml: 1, mr: 1 }}>Register Now</Typography></Button>
      </Box>
    </Fragment>
  );

}

export default Buttons;