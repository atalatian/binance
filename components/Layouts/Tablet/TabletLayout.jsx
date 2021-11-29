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

const TabletLayout = () => {
  return(
    <Fragment>
      <NavBarComponent/>
      <Grid container>
        <Grid item xs={12}>
          <GeneralInfo/>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={9}>
              <Grid container direction={`column`}>
                <Grid item xs={12}>
                  <Parent/>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Market maxHeight={23}/>
                    </Grid>
                    <Grid item xs={6}>
                      <OrderBook maxHeight={8}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <UserInfo/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <OrderForm/>
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