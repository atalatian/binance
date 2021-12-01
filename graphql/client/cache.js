import { InMemoryCache, makeVar } from '@apollo/client'

export const pairVar = makeVar('BTC/USDT');

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getPair() {
          return pairVar();
        }
      }
    }
  }
});