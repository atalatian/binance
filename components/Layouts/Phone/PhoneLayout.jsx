import {Fragment} from 'react'
import classes from '../Phone/PhoneLayout.module.css'
import { Grid } from '@mui/material'
import NavBarComponent from "../../NavBar/NavBarComponent";
import GeneralInfo from "../../GeneralInfo/GeneralInfo";
import MuiTabs from "./children/Tabs/Tabs";
import UserInfo from "../../UserInfo/UserInfo";
import Footer from "../../Footer/Footer";

const PhoneLayout = () => {
  return(
    <Fragment>
      <NavBarComponent/>
      <Grid container>
        <Grid item xs={12}>
          <GeneralInfo/>
        </Grid>
        <Grid item xs={12}>
          <MuiTabs/>
        </Grid>
        <Grid item xs={12}>
          <UserInfo/>
        </Grid>
      </Grid>
      <footer className={`${classes.footer}`}>
        <Footer/>
      </footer>
    </Fragment>
  );
}

export default PhoneLayout;