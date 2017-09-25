import React from 'react'
import Base from '@/Base'
import { connect } from 'react-redux'
import './First.scss'
import bg from './bg.jpg'

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
			<div className='first'>
				First
				<img src={ bg } onClick={ handleClick }/>
				{ count }
				<button onClick={ this.getData }> ajax </button>
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
