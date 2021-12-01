import { Fragment } from 'react'
import PC from './PC/PC'
import Tablet from "./Tablet/Tablet";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const OrderForm = (props) => {

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const pc = useMediaQuery(theme.breakpoints.up('lg'));
  const string = `${tablet} ${pc}`;

  const handleRender = () => {
    if (string === 'true false'){
      return <Tablet string={props.string}/>
    }else if (string === 'true true'){
      return <PC/>
    }
  }


  return(
    <Fragment>
      {handleRender()}
    </Fragment>
  )
}


export default OrderForm;