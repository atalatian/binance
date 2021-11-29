const mongoose = require('mongoose');

export const resolvers = {
  Query: {
    getCandles: async (parent, { pair }) => {
      const Candle = mongoose.model('Candlestick')
      const candles = await Candle.find({ pair: pair }).select('-_id').exec();
      return candles.map(candle => {
        return  {
          candle_id: candle.candle_id,
          pair: candle.pair,
          start_time: candle.start_time,
          end_time: candle.end_time,
          open: parseFloat(candle.open),
          high: parseFloat(candle.high),
          low: parseFloat(candle.low),
          close: parseFloat(candle.close),
          interval: candle.interval,
          volume: parseFloat(candle.volume),
          is_up_candle: candle.is_up_candle,
        }
      })
    }
  },
};
