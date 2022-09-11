import { CircularProgress, Paper } from '@mui/material'
import {useEffect, useRef, useState} from "react";
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'
const CandleStick = dynamic(
  () => import('../Chart/children/CandleStick/CandleStick'),
  { ssr: false }
)

const Chart = (props) => {
    const chartParent = useRef(null);
    const [chartWidth, setChartWidth] = useState(0)
    const [renderChart, setRenderChart] = useState(true)

    useEffect(()=>{
        const handleResize = () => {
            setRenderChart(false)
            setChartWidth(chartParent.current.offsetWidth - 5);
        }
        window.addEventListener('resize', handleResize)
        return ()=> {window.removeEventListener('resize', handleResize); setRenderChart(true)}
    }, [renderChart])




    const handleRef = (e) => {
        if (e){
            chartParent.current = e
            setChartWidth(e.offsetWidth - 5)
        }
    }

    const formatCandles = (candles) => {
        return candles.getCandles.map(candle=> {
            return {
                date: candle.start_time,
                open: candle.open,
                low: candle.low,
                high: candle.high,
                close: candle.close,
                volume: candle.volume
            }
        })
    }


    return(
      <Paper sx={{ backgroundColor: `#113264`, borderRadius: 0, height: `100%` }}
             elevation={0} ref={e => handleRef(e)}>
          {
              renderChart &&
                <CandleStick candles={formatCandles(props.candles)} pair={props.pair} width={chartWidth}/>

          }
      </Paper>
    );
}

export default Chart;