import {Fragment} from 'react'
import classes from '../Phone/PhoneLayout.module.css'
import { Grid } from '@mui/material'
import NavBarComponent from "../../NavBar/NavBarComponent";
import GeneralInfo from "../../GeneralInfo/GeneralInfo";
import MuiTabs from "./children/Tabs/Tabs";
import UserInfo from "../../UserInfo/UserInfo";
import Footer from './children/Footer/Footer'

const PhoneLayout = () => {
  return(
    <Fragment>
      <NavBarComponent/>
      <Grid container>
        <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
          <GeneralInfo/>
        </Grid>
        <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
          <MuiTabs/>
        </Grid>
        <Grid item xs={12} sx={{ border: `1px solid #184890` }}>
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