import { Fragment } from 'react'
import classes from './PCLayout.module.css'
import { Container, Grid, Paper } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Binance from '../../../public/binance.png';
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu } from 'semantic-ui-react'


const PCLayout = (props) => {
  return(
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: `#184890` }} position="static">
          <Toolbar className={`${classes.toolBar}`}>
            <div className={`d-flex align-items-center ${classes.logo}`}>
              <Image src={Binance} alt="Binance"/>
            </div>
            <IconButton className={`ms-3`} color={`inherit`}>
              <FontAwesomeIcon icon={faBars} size={`2x`}/>
              <FontAwesomeIcon className={`ms-3`} icon={faCaretDown} size={`1x`}/>
            </IconButton>
            <IconButton className={`ms-3`} color={`inherit`}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Buy Crypto
              </Typography>
              <FontAwesomeIcon className={`ms-3`} icon={faCaretDown} size={`1x`}/>
            </IconButton>
            <Button color={`inherit`}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Markets
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Paper className={`rounded-0 border border-danger ${classes.articles}`} elevation={3}>
          Articles
        </Paper>
      </Box>
      <Container maxWidth={`xl`} className={`p-0`}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={`rounded-0 border border-danger ${classes.generalInfo}`}>General Info</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={`row`}>
                      <Grid item xs={4}>
                        <Paper className={`rounded-0 border border-danger ${classes.orderBook}`}>Order Book</Paper>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container direction={`column`}>
                          <Grid item xs={12}>
                            <Paper className={`rounded-0 border border-danger ${classes.chart}`}>chart</Paper>
                          </Grid>
                          <Grid item xs={12}>
                            <Paper className={`rounded-0 border border-danger ${classes.orderForm}`}>Order Form</Paper>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={`rounded-0 border border-danger ${classes.trades}`}>Trades</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={`rounded-0 border border-danger ${classes.market}`}>Market</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={`rounded-0 border border-danger ${classes.marketActivities}`}>Market activities</Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={`rounded-0 border border-danger ${classes.userInfo}`} elevation={3}>
              User Info
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <footer className={`${classes.footer}`}>
        <Paper className={`rounded-0 border border-danger`} elevation={3}>
          Footer
        </Paper>
      </footer>
    </Fragment>
  );
}

export default PCLayout;