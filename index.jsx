import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'state/reducers'
import Routes from '@/routes/Routes'
import global from 'static/scss/global.scss'

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
