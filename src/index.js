import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './jsx/app.jsx';
import Text from './jsx/text.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/text" component={Text}/>
  </Router>
), document.getElementById('app'));