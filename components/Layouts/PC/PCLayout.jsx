import { Fragment, } from 'react'
import classes from './PCLayout.module.css'
import { Container, Grid } from '@mui/material'
import NavBarComponent from '../../NavBar/NavBarComponent'
import UserInfo from "../../UserInfo/UserInfo";
import Footer from "../../Footer/Footer";
import Articles from "../../Articles/Articles";
import GeneralInfo from "../../GeneralInfo/GeneralInfo";
import OrderBook from "../../OrderBook/OrderBook";
import OrderForm from "../../OrderForm/OrderForm";
import Trades from "../../Trades/Trades";
import Market from "../../Market/Market";
import MarketActivities from "../../MarketActivities/MarketActivities";
import Parent from '../../Chart/parent/Parent'


const PCLayout = () => {
  return(
    <Fragment>
      <NavBarComponent/>
      <Articles/>
      <Container maxWidth={`xl`} sx={{ p: `0 !important` }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <GeneralInfo/>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={`row`}>
                      <Grid item xs={4}>
                        <OrderBook maxHeight={23.8}/>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container direction={`column`}>
                          <Grid item xs={12}>
                            <Parent/>
                          </Grid>
                          <Grid item xs={12}>
                            <OrderForm/>
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
                    <Trades maxHeight={17.9}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Market maxHeight={17.9}/>
                  </Grid>
                  <Grid item xs={12}>
                    <MarketActivities/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <UserInfo/>
          </Grid>
        </Grid>
      </Container>
      <footer className={`${classes.footer}`}>
        <Footer/>
      </footer>
    </Fragment>
  );
}

export default PCLayout;