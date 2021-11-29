import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pairReducer from '../redux/reducers/pairReducer'


function MyApp ({ Component, pageProps }) {
  const store = createStore(pairReducer);
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
