import { Fragment } from 'react'
import Panel from './children/Panel/Panel'
import { Box, } from '@mui/material'
import MuiTabs from "../PC/children/Tabs/Tabs";

const Tablet = (props) => {
  return(
    <Fragment>
      <Box sx={{ backgroundColor: `#113264`, }}>
        <MuiTabs/>
        <Panel string={props.string}/>
      </Box>
    </Fragment>
  );
}

export default Tablet;