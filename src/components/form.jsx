/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';

import '../assets/scss/form.scss';

class Form extends React.Component {
	render() {
		return (
			<div className = "form">
                <div className = "userName">
                    <div className = "font">登录名:</div>
                    <input placeholder= "请输入用户名/手机号" maxLength = "11"/>
                </div>
                <div className = "password">
                    <div className = "font">密码:</div>
                    <input placeholder= "请输入密码"/>
                </div>
			</div>
		);
	}
};

export default Form;