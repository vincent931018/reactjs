/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import _ from 'lodash';

class SetVisibility extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : this.props.data,
            colors: ['green','nomal','nomal']
        };
        this.showAll = this.showAll.bind(this);
        this.showWaitDo = this.showWaitDo.bind(this);
        this.showComplated = this.showComplated.bind(this);
    }
    showAll() {
        let currrntData = this.props.data;
        for(var i =0 ; i < currrntData.length; i++){
            currrntData[i].visibility = 'block';
        }
        this.props.reHandleData(this.props.data);
        this.state.colors = ['green','nomal','nomal'];
        this.setState(this.state);
    }
    showWaitDo() {
        let currrntData = this.props.data;
        for(var i =0 ; i < currrntData.length; i++){
            if(currrntData[i].isComplated === 'isComplated'){
                currrntData[i].visibility = 'none';
            }else{
                currrntData[i].visibility = 'block';
            }
        }
        this.props.reHandleData(currrntData);
        this.state.colors = ['nomal','green','nomal'];
        this.setState(this.state);
    }
    showComplated() {
        let currrntData = this.props.data;
        for(var i =0 ; i < currrntData.length; i++){
            if(currrntData[i].isComplated === 'noComplated'){
                currrntData[i].visibility = 'none';
            }else{
                currrntData[i].visibility = 'block';
            }
        }
        this.props.reHandleData(currrntData);
        this.state.colors = ['nomal','nomal','green'];
        this.setState(this.state);
    }
    render() {
        return (
            <div className = "setVisibility">
                <div className = "type">
                    <span className = "item">显示类型:</span>
                    <div className = {this.state.colors[0] + " add_all"} onClick = { this.showAll }>全部</div>
                    <div className = {this.state.colors[1] + " add_waitDo"} onClick = { this.showWaitDo }>待完成</div>
                    <div className = {this.state.colors[2] + " add_complated"} onClick = { this.showComplated }>已完成</div>
                </div>
            </div>
        );
    }
};

export default SetVisibility;