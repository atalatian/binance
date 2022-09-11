import {Fragment} from 'react'
import classes from '../Tablet/TabletLayout.module.css'
import { Grid } from '@mui/material'
import NavBarComponent from "../../NavBar/NavBarComponent";
import GeneralInfo from "../../GeneralInfo/GeneralInfo";
import OrderBook from "../../OrderBook/OrderBook";
import UserInfo from "../../UserInfo/UserInfo";
import OrderForm from "../../OrderForm/OrderForm";
import Footer from "../../Footer/Footer";
import Market from "../../Market/Market";
import Parent from '../../Chart/parent/Parent'

const TabletLayout = (props) => {
  return(
    <Fragment>
      <NavBarComponent/>
      <Grid container>
        <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
          <GeneralInfo/>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={9}>
              <Grid container direction={`column`}>
                <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
                  <Parent/>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6} sx={{ border: `1px solid #184890` }}>
                      <Market maxHeight={360}/>
                    </Grid>
                    <Grid item xs={6} sx={{ border: `1px solid #184890` }}>
                      <OrderBook maxHeight={163}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
                  <UserInfo/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} sx={{ border: `1px solid #184890` }}>
              <OrderForm string={props.string}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <footer className={`${classes.footer}`}>
        <Footer/>
      </footer>
    </Fragment>
  );
}

export default TabletLayout;