//基类 供组件继承
import React, { Component } from 'react'
import axiox from 'common/http'

class Base extends Component {
    constructor(props){
        super(props)
    }
    getRespons(url, params){
        axiox.post(url, params).then(function(res) {
            console.log(res);
        })
        .catch(e => {
            console.log('网络出错了！');
        })
    }
}
 
export default Base;
