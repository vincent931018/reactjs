import React from 'react'
import ReactDOM from 'react-dom'
// 引入redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
// 引入reducer
import store from './store'
import Routes from '@/routes/Routes'
import global from '@/static/scss/global.scss'

//前端脚本中配置热更新处理逻辑
if (module.hot) {  
  module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);


