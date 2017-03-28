/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Redirect, Router, Route, hashHistory } from 'react-router';
import App from './components/app.jsx';

import './assets/scss/_main.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App}/>
        <Route path="index" component={App}/>
        <Redirect from='**' to='index'/>
    </Route>
  </Router>
), document.getElementById('app'));