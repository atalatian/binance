import { Fragment } from 'react'
import MuiTabs from './children/Tabs/Tabs'
import DenseTable from './children/Table/Table'

const Market = (props) => {
  return(
    <Fragment>
      <MuiTabs/>
      <DenseTable maxHeight={props.maxHeight}/>
    </Fragment>
  );
}


export default Market;