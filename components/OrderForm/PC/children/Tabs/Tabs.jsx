import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const tabNames = ['Spot',];

const  MuiTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 180, bgcolor: 'background.paper', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: `#0d274e`,
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
    </Box>
  );
}

export default MuiTabs;