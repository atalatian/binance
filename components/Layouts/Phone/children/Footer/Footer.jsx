import { Button, Stack } from '@mui/material'

const Footer = () => {
  return(
    <Stack direction={`row`} justifyContent={`space-evenly`} sx={{ backgroundColor: `#113264` }}>
      <Button sx={{ backgroundColor: `#98a61c`, '&:hover': {backgroundColor: `#98a61c`},
        color: `#ffffff`, width: `48%`, m:1 }}>Buy</Button>
      <Button sx={{ backgroundColor: `#a6291c`, '&:hover': {backgroundColor: `#a6291c`},
        color: `#ffffff`, width: `48%`, m:1  }}>Sell</Button>
    </Stack>
  )
}

export default Footer;