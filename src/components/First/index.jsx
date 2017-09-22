import React from 'react'
import store from 'state/reducers'
import Base from '@/Base'
import { connect } from 'react-redux'
import style from './First.scss'
import bg from './bg.jpg'

class First extends Base {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this); 
	}
	handleClick() {
		let originCount = this.state.count;
		originCount++;
		this.setState({
			count: originCount
		});
	}
	render() {
		return (
			<div className={ style.first }>
				First
				<img src={ bg } onClick={ this.handleClick }/>
				{ this.state.count }
			</div>
		);
	}
}

export default First;
