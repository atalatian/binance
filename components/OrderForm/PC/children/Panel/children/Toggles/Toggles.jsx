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
      <Stack sx={{ p: 1, backgroundColor: `#0d274e` }} flexWrap={`wrap`}
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
                '&.Mui-selected:hover': {backgroundColor: `#644311`, color: `#d28c23`},
                '&:hover': {backgroundColor: `#644311`, color: `#d28c23`},
                '&.Mui-selected': {color: `#644311`, backgroundColor: `#d28c23`} }}
                            value={`${toggleButton}`}>{toggleButton}</ToggleButton>
            )
          }
        </ToggleButtonGroup>
        <IconButton sx={{ color: `#ffffff`, '&:hover': {color: `#644311`} }}>
          <ArrowDropDown/>
        </IconButton>
        <IconButton sx={{ color: `#ffffff`, '&:hover': {color: `#644311`} }}>
          <ErrorOutlineOutlined/>
        </IconButton>
      </Stack>
    </Fragment>
  );
}

export default Toggles;