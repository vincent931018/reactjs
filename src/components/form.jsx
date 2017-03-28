/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : "",
            passWord : ""
        };
        this.handleData = this.handleData.bind(this);
    }
    handleData() {
        let data = {
            userName : this.refs.userName.value,
            passWord : this.refs.passWord.value
        }
        this.setState(data);
        this.props.getValue(data.userName,data.passWord);
    }
	render() {
		return (
			<div className = "formArea">
                <div className = "userName">
                    <div className = "font">登录名:</div>
                    <input type = "tel" autoComplete = "off" ref = "userName" placeholder= "请输入手机号" minLength = "11" maxLength = "11" onChange = { this.handleData } defaultValue = { this.state.userName }/>
                </div>
                <div className = "password">
                    <div className = "font">密码:</div>
                    <input type = "password" autoComplete = "new-password" ref = "passWord" placeholder= "请输入密码" onChange = { this.handleData } defaultValue = { this.state.passWord }/>
                </div>
			</div>
		);
	}
};

export default Form;