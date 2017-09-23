import React from 'react'
import ReactDOM from 'react-dom'
// 引入redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
// 引入reducer
import reducer from 'state/reducers'
// 引入redux日志系统中间件
import { createLogger } from 'redux-logger'
import Routes from '@/routes/Routes'
import global from 'static/scss/global.scss'

// 创建一个初始化的state
var initState = {
  count: 0
}

// 创建store 初始化状态 应用redux日志系统中间件
const store = createStore(reducer, initState, applyMiddleware(createLogger()))

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
