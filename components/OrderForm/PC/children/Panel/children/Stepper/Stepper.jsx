import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  { id: `s1`, text: `0%` },
  { id: `s2`, text: `25%` },
  { id: `s3`, text: `50%` },
  { id: `s4`, text: `75%` },
  { id: `s5`, text: `100%` },
];

const MuiStepper = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: `#2b4c7d`, p: 1 }}>
      <Stepper alternativeLabel>
        {steps.map((step) => (
          <Step key={step.id} sx={{
            '& .MuiSvgIcon-root': {color: `rgb(255 255 255 / 38%)`},
            '& .MuiSvgIcon-root.Mui-active': {color: `#FFB81C`}
          }}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-labelContainer': { color: `rgb(255 255 255 / 60%)` },
                '& .MuiStepLabel-label.Mui-active': { color: `#FFB81C` }
              }}>{step.text}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}


export default MuiStepper;
