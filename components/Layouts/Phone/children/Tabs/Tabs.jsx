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
          backgroundColor: `#113264`,
          '& .MuiButtonBase-root': {
            color: `#ffffff`,
            display: `flex`,
            flexDirection: `row-reverse`,
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#d28c23'
          },
          '& .MuiButtonBase-root.Mui-selected': {
            color: '#d28c23',
          },
          '& .MuiButtonBase-root:hover': {
            color: '#d28c23',
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
        <OrderBook maxHeight={184.5}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Trades maxHeight={373}/>
      </TabPanel>
    </Box>
  );
}

export default MuiTabs;