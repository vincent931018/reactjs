/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin : false,
            text : "未登录",
            userName: this.props.handleValue.userName
        }
        this.checkChangeCb = this.checkChangeCb.bind(this);
    }
    checkChangeCb(){
        if(!this.props.handleValue.userName){
            alert("请输入正确的用户名！");
            return;
        }else if(!this.props.handleValue.passWord){
            alert("请输入正确的密码！");
            return;
        }else if((this.props.handleValue.userName === this.state.userName)&& this.state.isLogin){
            alert("您已登录！");
            return;
        }else if((this.props.handleValue.userName != this.state.userName)&& this.state.isLogin){
            this.setState ({
                isLogin : true,
                text : "已登录",
                userName: this.props.handleValue.userName
            });
            alert("您切换账号成功！");
            return;
        }else{
            this.setState ({
                isLogin : true,
                text : "已登录",
                userName: this.props.handleValue.userName
            });
        }
    }
    render() {
        return (
        <div className = "button">
            <div onClick = {this.checkChangeCb}>{ this.state.text }</div>
        </div>
        );
    }
}

export default Button;