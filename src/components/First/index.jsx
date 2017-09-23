import React from 'react'
import Base from '@/Base'
import { connect } from 'react-redux'
import style from './First.scss'
import bg from './bg.jpg'

class First extends Base {
	constructor(props){
		super(props);
	}
	render() {
		const { count, handleClick } = this.props; 
		return (
			<div className={ style.first }>
				First
				<img src={ bg } onClick={ handleClick }/>
				{ count }
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
