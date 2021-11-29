import Chart from '../Chart'
import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Parent = () => {

  const [data, setData] = useState([])
  const reduxPair = useSelector(state => state);

  useEffect(()=> {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Query($pair: String!) {
            getCandles(pair: $pair){
              start_time
              open
              high
              low
              close
              volume
            }
          }
      `,
        variables: {
          pair: reduxPair
        },
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = result.data.getCandles.map(candle=> {
          return {
            date: candle.start_time,
            open: candle.open,
            low: candle.low,
            high: candle.high,
            close: candle.close,
            volume: candle.volume
          }
        })
        setData(newData);
      }
      );
  }, [reduxPair])

  return(
    <Fragment>
      <Chart data={data}/>
    </Fragment>
  );
}

export default Parent;