//基类 供组件继承
import React, { Component } from 'react'
import axiox from 'common/http'

class Base extends Component {
    constructor(props){
        super(props);
        //定义全局变量 eg.
        this.auth = 'caowencheng';
    }
    getRespons(url, params){
        return new Promise(function(resolve, reject) {
             axiox.post(url, params).then(function(res) {
                console.log('----返回参数----' + JSON.stringify(res));
                resolve(res);
            })
            .catch(e => {
                console.log('----请求错误----' + JSON.stringify(e));
                resolve(e);
            })
        })
    }
}
 
export default Base;
