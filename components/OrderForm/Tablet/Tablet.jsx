import { Fragment } from 'react'
import Panel from './children/Panel/Panel'
import { Box, } from '@mui/material'
import MuiTabs from "../PC/children/Tabs/Tabs";

const Tablet = () => {
  return(
    <Fragment>
      <Box sx={{ backgroundColor: `#184890`, }}>
        <MuiTabs/>
        <Panel/>
      </Box>
    </Fragment>
  );
}

export default Tablet;