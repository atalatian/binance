import {Fragment} from 'react'
import PhoneLayout from "../Layouts/Phone/PhoneLayout";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TabletLayout from "../Layouts/Tablet/TabletLayout";
import PCLayout from "../Layouts/PC/PCLayout";

const Render = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.up('sm'))
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const pc = useMediaQuery(theme.breakpoints.up('lg'));
  const string = `${phone} ${tablet} ${pc}`;

  const handleRender = () => {
    if (string === 'true false false'){
      return <PhoneLayout />
    }else if (string === 'true true false'){
      return <TabletLayout string={string} />
    }else if (string === 'true true true'){
      return <PCLayout />
    }else if (string === 'false false false'){
      return <PhoneLayout />
    }
  }


  return(
    <Fragment>
      <div style={{ backgroundColor: `#113264` }}>
        {handleRender()}
      </div>
    </Fragment>
  );
}


export default Render;