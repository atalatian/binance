import {Fragment} from "react";
import MuiTabs from "./children/Tabs/Tabs";
import Panel from "./children/Panel/Panel";

const UserInfo = () => {
  return(
    <Fragment>
      <MuiTabs/>
      <Panel/>
    </Fragment>
  )
}

export default UserInfo;