import React from 'react'
import { Fragment } from 'react'
import { IconButton, Stack } from '@mui/material'
import { ArrowDropDown, ErrorOutlineOutlined } from '@mui/icons-material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const toggleButtons = ['limit', 'market', 'stop-limit']

const Toggles = () => {

  const [alignment, setAlignment] = React.useState('limit');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return(
    <Fragment>
      <Stack sx={{ p: 1, backgroundColor: `#2b4c7d` }} flexWrap={`wrap`}
             direction={`row`} spacing={2} alignItems={`center`}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          {
            toggleButtons.map((toggleButton, index) =>
              <ToggleButton key={index} sx={{ color: `#ffffff`,
                '&.Mui-selected:hover': {backgroundColor: `#ffefcd`, color: `#FFB81C`},
                '&:hover': {backgroundColor: `#ffefcd`, color: `#FFB81C`},
                '&.Mui-selected': {color: `#FFB81C`, backgroundColor: `#ffefcd`} }}
                            value={`${toggleButton}`}>{toggleButton}</ToggleButton>
            )
          }
        </ToggleButtonGroup>
        <IconButton sx={{ color: `#ffffff`, '&:hover': {color: `#FFB81C`} }}>
          <ArrowDropDown/>
        </IconButton>
        <IconButton sx={{ color: `#ffffff`, '&:hover': {color: `#FFB81C`} }}>
          <ErrorOutlineOutlined/>
        </IconButton>
      </Stack>
    </Fragment>
  );
}

export default Toggles;