/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';
import { fetchData } from '../common/fetch';

import Form from './form.jsx';
import Button from './button.jsx';

import '../assets/scss/app.scss';

class App extends React.Component {
	render() {
		return (
			<div className = "container">
				<img src = { require('../assets/img/reactjs.png') }/>
				<div className = "subtitle">Welcome to learning for Reactjs!!!</div>
				<Form/>
				<Button name = "确认"/>
			</div>
		);
	}
};

export default App;