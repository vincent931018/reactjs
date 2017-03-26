/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';

import '../assets/scss/button.scss';

class Button extends React.Component {
    handleClick(){
   		window.location.hash = 'button';
    }
    render() {
        return (
        <div className = "button">
            <div onClick = {this.handleClick}>{ this.props.name }</div>
        </div>
        );
    }
}

export default Button;