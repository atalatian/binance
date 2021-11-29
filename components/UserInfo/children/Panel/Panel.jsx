import {Link, Paper, Typography} from "@mui/material";

const Panel = () => {
  return(
    <Paper sx={{ display: `grid`, placeItems: `center`,
      minHeight: `15rem`, backgroundColor: `#184890`, borderRadius: 0 }}>
      <Typography variant={`body1`}>
        <Link sx={{ m: 1 }}>
          Log In
        </Link>
        or
        <Link sx={{ m: 1 }}>
          Register Now
        </Link>
        to trade
      </Typography>
    </Paper>
  )
}


export default Panel;