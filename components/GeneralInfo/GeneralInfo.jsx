import { Fragment } from 'react'
import { Box, Link, Paper, Stack, Typography } from '@mui/material'
import classes from './GeneralInfo.module.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MuiSelect from './children/MuiSelect'


const sections = [
  {id: `b1`, texts: [
      {id: `ty1`, text: `24h Change`, color: `#ffffff`},
      {id: `ty2`, text: `9.44 + 0.01%`, color: `#d23423`}
    ]},
  {id: `b2`, texts: [
      {id: `ty1`, text: `24h Change`, color: `#ffffff`},
      {id: `ty2`, text: `9.44 + 0.01%`, color: `#ffffff`}
    ]},
  {id: `b3`, texts: [
      {id: `ty1`, text: `24h Change`, color: `#ffffff`},
      {id: `ty2`, text: `9.44 + 0.01%`, color: `#ffffff`}
    ]},
  {id: `b4`, texts: [
      {id: `ty1`, text: `24h Change`, color: `#ffffff`},
      {id: `ty2`, text: `9.44 + 0.01%`, color: `#ffffff`}
    ]},
  {id: `b5`, texts: [
      {id: `ty1`, text: `24h Change`, color: `#ffffff`},
      {id: `ty2`, text: `9.44 + 0.01%`, color: `#ffffff`}
    ]},
]


const GeneralInfo = () => {
  return(
    <Fragment>
      <Paper sx={{ backgroundColor: `#113264`, borderRadius: 0, pt: 1, pb: 1 }}>
        <Stack direction={`row`}  flexWrap={`wrap`} spacing={3}>
          <Stack direction={`row`} spacing={3}>
            <Box sx={{display: `flex`, flexDirection: `column`, justifyContent: `center`, ml: 1}}>
              <MuiSelect/>
              <Link href={`#`} underline={`none`} >
                <Typography variant={`caption`} sx={{ color: `#ffffff`, '&:hover': { color: `#d28c23` } }}>
                  Bitcoin
                </Typography>
              </Link>
            </Box>
            <Box sx={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
              <Typography variant="subtitle1" component="div" sx={{ color: `#c0d223` }}>
                59.388.32
              </Typography>
              <Typography variant="caption" component="div" sx={{ color: `#ffffff` }}>
                $59.420.55
              </Typography>
            </Box>
          </Stack>
          <Stack direction={`row`} flexWrap={`wrap`} spacing={3}>
            {
              sections.map(section =>
                <Box key={section.id} sx={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
                  {
                    section.texts.map(text =>
                      <Typography key={text.id} variant="caption" component="div" sx={{ color: text.color }}>
                        {text.text}
                      </Typography>
                    )
                  }
                </Box>
              )
            }
          </Stack>
          <Typography variant={`caption`} component={`div`}
                      sx={{ display: `flex`, alignItems: `center`,
                        margin: `auto !important`, mr: `10px !important` }}>
            <Link className={`${classes.link}`} href={`#`} sx={{ display: `flex`, alignItems: `center`,
              color: `#ffffff`, '&:hover': { color: `#d28c23` }}}
                  underline={`none`}><PlayCircleOutlineIcon sx={{ m: 1 }}/> Spot Tutorial</Link>
          </Typography>
        </Stack>
      </Paper>
    </Fragment>
  );
}

export default GeneralInfo;