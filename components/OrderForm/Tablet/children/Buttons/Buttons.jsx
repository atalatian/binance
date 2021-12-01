import { Button, Stack } from '@mui/material'

const Buttons2 = () => {
  return(
    <Stack direction={`row`} justifyContent={`space-evenly`} sx={{ backgroundColor: `#0d274e` }}>
      <Button sx={{ backgroundColor: `#98a61c`,
        color: `#ffffff`, width: `48%`, m:1, '&:hover': {backgroundColor: `#98a61c`} }}>Buy</Button>
      <Button disabled sx={{ backgroundColor: `#a6291c`, '&:hover': {backgroundColor: `#a6291c`},
        color: `#ffffff`, width: `48%`, m:1  }}>Sell</Button>
    </Stack>
  );
}

export default Buttons2