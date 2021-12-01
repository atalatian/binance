import { Fragment, useState } from 'react'
import { Paper, Link, Grid, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import classes from './Articles.module.css'


const links = [
  {id: `l1`, text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
  {id: `l2`, text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
  {id: `l3`, text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
  {id: `l4`, text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
  {id: `l5`, text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
]

const Articles = () => {

  const maxItems = 3
  const [numberOfItems, setNumberOfItems] = useState(maxItems);
  const maxTextLength = 50;

  const formantText = (text) => {
    return text.substr(0, maxTextLength) + '...'
  }

  const handleArrowClick = () => {
    setNumberOfItems(maxItems);
    if (numberOfItems === maxItems){
      setNumberOfItems(links.length);
    }
  }

  return(
    <Fragment>
      <Paper sx={{ backgroundColor: `#0d274e`, borderRadius: 0, pt: 1, pb: 1 }}>
        <Grid container alignItems={`center`}>
          <Grid item xs={11}>
            <Grid container>
              {
                links.slice(0, numberOfItems).map(link => <Grid sx={{ p: 1 }} item key={link.id} xs={4}>
                  <Link className={`${classes.action}`} sx={{ color: `#ffffff` }}
                        underline={`none`} href={`#`}>
                  {formantText(link.text)}</Link></Grid>)
              }
            </Grid>
          </Grid>
          <Grid item xs={1} display={`flex`} justifyContent={`center`} alignItems={`flex-start`}>
            <IconButton onClick={handleArrowClick}>
              <ArrowDropDownIcon className={`${classes.action}`} sx={{ color: `#ffffff` }}/>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  )
}


export default Articles;