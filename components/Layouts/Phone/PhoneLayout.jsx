import { Fragment } from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import classes from '../Phone/PhoneLayout.module.css'
import { Grid, Paper } from '@mui/material'

const PhoneLayout = (props) => {
  return(
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={`${classes.toolBar}`}>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={`rounded-0 border border-danger ${classes.generalInfo}`} elevation={3}>
            General Info
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={`rounded-0 border border-danger ${classes.panel}`} elevation={3}>
            Panel
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={`rounded-0 border border-danger ${classes.userInfo}`} elevation={3}>
            User Info
          </Paper>
        </Grid>
      </Grid>
      <footer className={`${classes.footer}`}>
        <Paper sx={{ height: `100%` }} className={`rounded-0 border border-danger`} elevation={3}>
          Footer
        </Paper>
      </footer>
    </Fragment>
  );
}

export default PhoneLayout;