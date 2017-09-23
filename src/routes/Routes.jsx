import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//Components
import Homepage from 'pages/Homepage'
import NotFound from 'pages/NotFound'

// 如果你的Home，Topics， Jobs是互斥的，那还要加上Switch
// 这里指定exact意思是精确匹配，为了给其他组件一个机会获取到url改变
class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={ Homepage } />
						<Route exact path={`/home`} component={ Homepage } />
						<Route component={ NotFound } />
					</Switch>
				</div>
            </Router>
		);
	}
}
 
export default Routes;
