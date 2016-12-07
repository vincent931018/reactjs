import React from 'react';
import { fetch } from '../common/fetch';

let btn = {
	background : '#ccc',
	borderRadius : '3px',
	width : '50px',
	textAlign : 'center'
};

let obj = {
  name : 'cwc',
  age : '24'
}


class App extends React.Component {
   handleClick(){
   	fetch('checkBlackList',obj);
   }
   handleClick2(){
      window.location.hash = '#/text';
   }
   render() {
      return (
        <div>
        	<Hello/>
            Hello World!!!<br />
            欢迎来到{this.props.name}的学习！！!<br/>
            <div onClick = {this.handleClick} style = {btn}>Fetch</div>
            <div onClick = {this.handleClick2} style = {btn}>跳至Text</div>
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