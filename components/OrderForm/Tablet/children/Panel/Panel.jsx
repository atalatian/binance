import React from 'react'
import { Fragment } from 'react'
import { Box, Stack } from '@mui/material'
import Toggles from "../../../PC/children/Panel/children/Toggles/Toggles";
import Titles from "../../../PC/children/Panel/children/Titles/Titles";
import Inputs from "../../../PC/children/Panel/children/Inputs/Inputs";
import MuiStepper from "../../../PC/children/Panel/children/Stepper/Stepper";
import Buttons from "../../../PC/children/Panel/children/Buttons/Buttons";
import Buttons2 from '../Buttons/Buttons'


const Panel = (props) => {

  return(
    <Fragment>
      <Toggles/>
      <Stack direction={`row`}>
        {
          [0].map(box =>
            <Box key={box} sx={{ width: `100%` }}>
              {
                props.string === 'true true false' ? <Buttons2/> : null
              }
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