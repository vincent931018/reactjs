import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//Components
import Homepage from 'pages/Homepage'
import NotFound from 'pages/NotFound'

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
                	<Route exact path="/" component={ Homepage } />
					<Route path="/home" component={ Homepage } />
					<Route component={ NotFound } />
				</Switch>
            </Router>
		);
	}
}
 
export default Routes;
