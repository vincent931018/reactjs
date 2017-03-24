import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Redirect, Router, Route, hashHistory, DefaultRoute } from 'react-router';
import App from './jsx/app.jsx';
import Text from './jsx/text.jsx';
import './assets/scss/app.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App}/>
        <Route path="index" component={App}/>
        <Route path="text" component={Text}/>
        <Redirect from='**' to='index'/>
    </Route>
  </Router>
), document.getElementById('app'));