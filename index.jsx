import React from 'react'
import ReactDOM from 'react-dom'
// 引入redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
// 引入reducer
import reducer from 'state/reducers'
import Routes from '@/routes/Routes'
import global from 'static/scss/global.scss'

// 创建一个初始化的state
var initState = {
  count: 0
}

// 创建store
const store = createStore(reducer, initState)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
