import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Typography} from "@mui/material";
import Chart from "../../../../Chart/Chart";
import OrderBook from "../../../../OrderBook/OrderBook";
import Trades from "../../../../Trades/Trades";
import Parent from '../../../../Chart/parent/Parent'

const tabNames = ['Chart', 'OrderBook', 'Trades'];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const  MuiTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: `#184890`,
          '& .MuiButtonBase-root': {
            color: `#ffffff`,
            display: `flex`,
            flexDirection: `row-reverse`,
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#FFB81C'
          },
          '& .MuiButtonBase-root.Mui-selected': {
            color: '#FFB81C',
          },
          '& .MuiButtonBase-root:hover': {
            color: '#FFB81C',
          },
        }}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {
          tabNames.map((name, index) =>
            <Tab key={index.toString()} label={`${name}`}/>)
        }
      </Tabs>
      <TabPanel value={value} index={0}>
        <Parent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderBook/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Trades/>
      </TabPanel>
    </Box>
  );
}

export default MuiTabs;