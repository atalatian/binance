import { Fragment } from 'react'
import MuiTabs from './children/Tabs/Tabs'
import Panel from './children/Panel/Panel'
import { Box } from '@mui/material'

const PC = () => {
  return(
    <Fragment>
      <Box sx={{ backgroundColor: `#184890`, }}>
        <MuiTabs/>
        <Panel/>
      </Box>
    </Fragment>
  );
}

export default PC;