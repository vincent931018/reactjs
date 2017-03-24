/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';
import { fetchData } from '../common/fetch';

import Form from './form.jsx';

import '../assets/scss/app.scss';

class App extends React.Component {
	handleClick(){
		fetchData('checkBlackList',obj);
	}
	handleClick2(){
		window.location.hash = '#/text';
	}
	render() {
		return (
			<div className = "container">
				<div className = "head_box">
					<img src = "../assets/img/reactjs.png"/>
				</div>
				<Form/>
			</div>
		);
	}
};

export default App;