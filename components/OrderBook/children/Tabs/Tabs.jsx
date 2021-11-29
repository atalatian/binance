import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {List} from '@mui/icons-material';

const tabNames = [
  {
    id: `t1`,
    icons: [
      {id: `i1`, color: `rgb(246, 70, 93)`},
      {id: `i2`, color: `rgb(14, 203, 129)`},
    ]
  },
  {
    id: `t2`,
    icons: [
      {id: `i1`, color: `rgb(14, 203, 129)`},
    ]
  },
  {
    id: `t3`,
    icons: [
      {id: `i1`, color: `rgb(246, 70, 93)`},
    ]
  },
]

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
          tabNames.map((name) =>
            <Tab key={name.id}
                 icon={
                   <Box>
                     {
                       name.icons.map(icon =>
                         <Box key={icon.id}>
                           <List sx={{ color: icon.color }}/>
                         </Box>
                       )
                     }
                   </Box>
                 }
            />)
        }
      </Tabs>
    </Box>
  );
}

export default MuiTabs;


