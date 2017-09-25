import React from 'react'
import Base from '@/Base'
import { connect } from 'react-redux'
import styled from 'styled-components';
import style from './First.scss'
import bg from './bg.jpg'

//编写行内样式
const Button = styled.button`
  	display: block;
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
const Div = styled.div`
  	display: block;
	color: #ccc;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

class First extends Base {
	constructor(props){
		super(props);
		this.getData = this.getData.bind(this);
	}
	//ajax获取服务端数据
	getData() {
		this.getRespons('/test',{}).then(function(res) {
			console.log(JSON.stringify(res));
		})
	}
	render() {
		const { count, handleClick } = this.props; 
		return (
			<div className={ style.first }>
				First
				<img src={ bg } onClick={ handleClick }/>
				{ count }
				<Button onClick={ this.getData }> ajax </Button>
				<Div>123</Div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  	return {
    	count: state.counter.count
  	}
}

function mapDispatchToProps(dispatch) {
  	return {
    	handleClick:() => {
      			dispatch({
        		type: 'increase'
      		})
    	}
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(First);
