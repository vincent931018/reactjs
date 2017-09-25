//store
import reducers from './src/state/reducers'
// 引入redux
import { createStore, applyMiddleware } from 'redux'
// 引入redux日志系统中间件
import { createLogger } from 'redux-logger'

// 创建一个初始化的state
const initState = {
    count: 0
}

export default createStore(reducers, initState, applyMiddleware(createLogger()));