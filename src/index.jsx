/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Redirect, Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers/index';

import App from './components/app.jsx';
import AddTodo from './components/AddTodo.jsx';

import './assets/scss/_main.scss';

let store = createStore(todoApp);

ReactDOM.render((
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={App}/>
                <Route path="index" component={App}/>
                <Route path="addTodo" component={AddTodo}/>
                <Redirect from='**' to='index'/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));