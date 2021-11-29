import { Fragment } from 'react'
import MuiTabs from './children/Tabs/Tabs'
import MyTableHead from './children/TableHead/MyTableHead'
import DownTableBody from './children/DownTableBody/DownTableBody'
import UpTableBody from './children/UpTableBody/UpTableBody'

const OrderBook = (props) => {
  return(
    <Fragment>
      <MuiTabs/>
      <MyTableHead/>
      <DownTableBody maxHeight={props.maxHeight}/>
      <UpTableBody maxHeight={props.maxHeight}/>
    </Fragment>
  );
}

export default OrderBook;