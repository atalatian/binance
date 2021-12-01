import client from '../graphql/client/apollo-client'
import { ApolloProvider } from '@apollo/client'


function MyApp ({ Component, pageProps }) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
