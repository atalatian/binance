import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Candle {
    candle_id: ID!
    pair: String!
    start_time: String!
    end_time: String!
    open: Float!
    high: Float!
    low: Float!
    close: Float!
    interval: String!
    volume: Float!
    is_up_candle: Boolean!
  }
  
  type Query {
    hello: String!
    getCandles(pair: String!): [Candle!]
  }
`;