import { Fragment } from 'react'
import MuiTabs from './children/Tabs/Tabs'
import SearchField from './children/Search/Search'
import DenseTable from './children/Table/Table'

const Trades = (props) => {
  return(
    <Fragment>
      <SearchField/>
      <MuiTabs/>
      <DenseTable maxHeight={props.maxHeight}/>
    </Fragment>
  );
}


export default Trades;