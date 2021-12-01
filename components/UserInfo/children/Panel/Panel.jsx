import {Link, Paper, Typography} from "@mui/material";

const Panel = () => {
  return(
    <Paper sx={{ display: `grid`, placeItems: `center`,
      minHeight: `15rem`, backgroundColor: `#113264`, borderRadius: 0 }}>
      <Typography variant={`body1`} sx={{ color: `#ffffff`, }}>
        <Link sx={{ m: 1, cursor: `pointer` }} underline={`none`}>
          <Typography component={'span'} sx={{ color: `#d28c23` }}>
            Log In
          </Typography>
        </Link>
        or
        <Link sx={{ m: 1, cursor: `pointer` }} underline={`none`}>
          <Typography component={'span'} sx={{ color: `#d28c23` }}>
            Register Now
          </Typography>
        </Link>
        to trade
      </Typography>
    </Paper>
  )
}


export default Panel;