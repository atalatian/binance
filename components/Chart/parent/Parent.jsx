import Chart from '../Chart'
import { Fragment } from 'react';
import { useQuery, gql, useReactiveVar } from '@apollo/client'
import { pairVar } from '../../../graphql/client/cache'
import Box from '@mui/material/Box'

const QUERY = gql`
    query Query($pair: String!) {
      getCandles(pair: $pair){
        start_time
        pair
        open
        high
        low
        close
        volume
      }
    }
`;


const Parent = () => {

  const pair = useReactiveVar(pairVar)

  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      pair: pair
    },
  })

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return(
    <Box minHeight={500}>
      <Chart candles={data} pair={pair}/>
    </Box>
  );
}

export default Parent;