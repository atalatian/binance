import { Fragment } from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import classes from '../Tablet/TabletLayout.module.css'
import { Paper, Grid } from '@mui/material'

const TabletLayout = (props) => {
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
          <Grid container>
            <Grid item xs={9}>
              <Grid container direction={`column`}>
                <Grid item xs={12}>
                  <Paper className={`rounded-0 border border-danger ${classes.chart}`} elevation={3}>
                    Chart
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Paper className={`rounded-0 border border-danger ${classes.trades}`} elevation={3}>
                        Trades
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={`rounded-0 border border-danger ${classes.orderBook}`} elevation={3}>
                        Order Book
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={`rounded-0 border border-danger ${classes.userInfo}`} elevation={3}>
                    User Info
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Paper className={`rounded-0 border border-danger ${classes.orderForm}`} elevation={3}>
                Order Form
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <footer className={`${classes.footer}`}>
        <Paper className={`rounded-0 border border-danger`} elevation={3}>
          Footer
        </Paper>
      </footer>
    </Fragment>
  );
}

export default TabletLayout;