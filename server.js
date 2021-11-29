const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mongoose = require('mongoose');
const ccxt = require('ccxt')
const Candle = require('./server/src/candlestickModel')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const createCandles = async () => {
  const binance = new ccxt.binance;
  const tradingPair = ['BTC/USDT', 'BNB/BTC'];
  mongoose.connection.db.listCollections().toArray((error, result)=> {
    if (error){
      console.log(error);
    }else {
      if (result[0].name === 'candlesticks'){
        mongoose.connection.db.dropCollection('candlesticks')
      }
    }
  });

  tradingPair.map(async (pair) => {
    const interval = '1d'
    const candles = await binance.fetchOHLCV(pair, interval);
    const newCandles = candles.slice(-31)
    newCandles.map(async (candle, index) => {
      const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
      const newCandle = {
        candle_id: new mongoose.Types.ObjectId().toString(),
        pair: pair,
        start_time: `${pad(new Date(candle[0]).getFullYear(),4)}-${pad(new Date(candle[0]).getMonth()+1)}-${pad(new Date(candle[0]).getDate())} ${pad(new Date(candle[0]).getHours())}:${pad(new Date(candle[0]).getMinutes())}:${pad(new Date(candle[0]).getSeconds())}`,
        end_time: newCandles[index + 1] ? `${pad(new Date(newCandles[index + 1][0]).getFullYear(),4)}-${pad(new Date(newCandles[index + 1][0]).getMonth()+1)}-${pad(new Date(newCandles[index + 1][0]).getDate())} ${pad(new Date(newCandles[index + 1][0]).getHours())}:${pad(new Date(newCandles[index + 1][0]).getMinutes())}:${pad(new Date(newCandles[index + 1][0]).getSeconds())}` : '',
        open: candle[1],
        high: candle[2],
        low: candle[3],
        close: candle[4],
        interval: interval,
        volume: candle[5],
        is_up_candle: candle[4] > candle[1],
      }

      const mongoCandle = new Candle(newCandle);
      await mongoCandle.validateSync();
      await mongoCandle.save();
    })
  })
}


app.prepare().then(async () => {

  await mongoose.connect(
    'mongodb+srv://atalatian:Amirhoseyn2014@cluster0.auyyz.mongodb.net/Binance?retryWrites=true&w=majority'
  ).catch((err)=> console.log(err))

  await createCandles();

  await createServer((req, res) => {

    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)

  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})