import { Paper } from '@mui/material'
import {useEffect, useRef, useState} from "react";
import dynamic from 'next/dynamic'
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
      setChartWidth(chartParent.current.offsetWidth);
    }
    window.addEventListener('resize', handleResize)
    return ()=> {window.removeEventListener('resize', handleResize); setRenderChart(true)}
  }, [renderChart])


  const handleRef = (e) => {
    if (e){
      chartParent.current = e
      setChartWidth(e.offsetWidth)
    }
  }


  return(
    <Paper sx={{ backgroundColor: `#4c63a2`, borderRadius: 0 }}
           elevation={0} ref={e => handleRef(e)}>
      {
        renderChart && <CandleStick data={props.data} width={chartWidth}/>
      }
    </Paper>
  );
}

export default Chart;