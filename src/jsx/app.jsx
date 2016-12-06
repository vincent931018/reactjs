import React from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

let btn = {
	background : '#ccc',
	borderRadius : '3px',
	width : '50px',
	textAlign : 'center'
}

let config = {

    method: 'GET',

    mode: 'no-cors',

    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
	}

	//body: 'data=1&name=cwc'
};
class App extends React.Component {
   handleClick(){
   	fetch("http://192.168.0.108:8093/mock/checkBlackList?callback=JSONP_CALLBACK",config)
   	.then(function(data){
   		console.log(data);
   	})
   }
   render() {
      return (
        <div>
        	<Hello/>
            Hello World!!!<br />
            欢迎来到{this.props.name}的学习！！!<br/>
            <div onClick = {this.handleClick} style = {btn}>Fetch</div>
        </div>
      );
   }
}

class Hello extends React.Component {
   render() {
      return (
        <div>
           我爱学习！
        </div>
      );
   }
}

export default App;