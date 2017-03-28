/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';
import { fetchData } from '../common/fetch';

import Form from './form.jsx';
import Button from './button.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: ""
        }
        this.getValue = this.getValue.bind(this);
    }
    getValue(userName, passWord) {
        this.setState({
            userName: userName,
            passWord: passWord
        });
    }
    render() {
        return (
        	<div className = "container" >
            	<img src = { require('../assets/img/reactjs.png') }/>
            	<div className = "subtitle" > Welcome to learning for Reactjs!!! </div>
            	<Form getValue = { this.getValue }/>
            	<Button text = "登录" handleValue = { this.state }/>
            </div>
        );
    }
};

export default App;
