import NavBar from '../UI/NavBar/NavBar'
import Box from '@mui/material/Box'
import Binance from '../../public/binance.png';
import { faAdjust, faBars, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarItem from '../UI/NavBarItem/NavBarItem'
import Image from 'next/image';
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const itemSet1 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faBars} size={`lg`}/>,
    dropDown: true,},
  {id: 'it2', children: `Buy Crypto`,
    newChip: true, dropDown: true,},
  {id: 'it3', children: `Market`,},
  {id: 'it4', children: `Trade`,
    dropDown: true,},
  {id: 'it5', children: `Derivatives`,
    dropDown: true,},
  {id: 'it6', children: `Finance`,
    dropDown: true,},
  {id: 'it7', children: `NFT`,
    newChip: true, dropDown: true,},
]


const itemSet2 = [
  {id: 'it1', children: `Log In`,},
  {id: 'it2', children: `Register`,
    variant: `contained`,},
]

const itemSet3 = [
  {id: 'it1', children: `Downloads`,},
  {id: 'it2', children: `English`,},
  {id: 'it3', children: `USD`,},
]

const itemSet4 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faQuestionCircle} size={`lg`}/>,
    justIcon: true,},
]

const itemSet5 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faAdjust} size={`lg`}/>,
    justIcon: true,},
]

const NavBarComponent = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.up('sm'))
  const tablet = useMediaQuery(theme.breakpoints.up('md'));
  const pc = useMediaQuery(theme.breakpoints.up('lg'));
  const string = `${phone} ${tablet} ${pc}`;
  let items = [
    {id: `is1`, item: itemSet1,},
    {id: `is2`, item: itemSet2,},
    {id: `is3`, item: itemSet3,},
    {id: `is4`, item: itemSet4,},
    {id: `is5`, item: itemSet5,},
  ]

  if (string === 'true false false'){
    items = [
      {id: `is1`, item: itemSet1,},
      {id: `is2`, item: itemSet2,},
    ]
  }else if (string === 'true true false'){
    items = [
      {id: `is1`, item: itemSet1,},
      {id: `is2`, item: itemSet2,},
      {id: `is3`, item: itemSet3,},
    ]
  }else if (string === 'true true true'){
    items = [
      {id: `is1`, item: itemSet1,},
      {id: `is2`, item: itemSet2,},
      {id: `is3`, item: itemSet3,},
      {id: `is4`, item: itemSet4,},
      {id: `is5`, item: itemSet5,},
    ]
  }else if (string === 'false false false'){
    items = [
      {id: `is2`, item: itemSet2,},
    ]
  }


  return(
    <NavBar>
      <Box sx={{ width: `10rem`, display: `flex`, alignItems: `center` }}>
          <Image src={Binance} alt={`Binance`}/>
      </Box>
      {
        items.map(is => {
          return(
            <Box key={is.id} sx={is.id === 'is2' ? { ml: `auto` } : null}>
              {
                is.item.map(item =>
                  <Box key={item.id} sx={{ display: `inline-block` }}>
                    <NavBarItem justIcon={item.justIcon} variant={item.variant}
                                newChip={item.newChip} dropDown={item.dropDown}>
                      {item.children}
                    </NavBarItem>
                  </Box>
                )
              }
            </Box>
          );
        })
      }
    </NavBar>
  );
}

export default NavBarComponent;