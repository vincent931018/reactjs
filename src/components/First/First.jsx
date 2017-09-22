import React, { Component } from 'react'
import style from './First.scss'
import bg from './bg.jpg'

class First extends Component {
	render() {
		return (
			<div className={ style.first }>
				First
				<img src={ bg } />
			</div>
		);
	}
}
 
export default First;
