const pairReducer = (state = 'BTC/USDT', action) => {
  if (action.type === 'GO_BTC/USDT') {
    state = 'BTC/USDT'
    return state
  }else if (action.type === 'GO_BNB/BTC'){
    state = 'BNB/BTC'
    return state
  }else {
    return state
  }
}


export default pairReducer;