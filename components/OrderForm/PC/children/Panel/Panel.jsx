import React from 'react'
import { Fragment } from 'react'
import Toggles from './children/Toggles/Toggles'
import Titles from './children/Titles/Titles'
import Inputs from './children/Inputs/Inputs'
import MuiStepper from './children/Stepper/Stepper'
import Buttons from './children/Buttons/Buttons'
import { Box, Stack } from '@mui/material'


const Panel = () => {

  return(
    <Fragment>
      <Toggles/>
      <Stack direction={`row`}>
        {
          [0, 1].map(box =>
            <Box key={box} sx={{ width: `50%` }}>
              <Titles/>
              <Inputs/>
              <MuiStepper/>
              <Buttons/>
            </Box>
          )
        }
      </Stack>
    </Fragment>
  );
}

export default Panel;