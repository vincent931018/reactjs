/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import store from '../common/store';
import { setVisibility } from '../action/actions';
import { connect } from 'react-redux';

let data = store.getState();
let dispatch = store.dispatch;

class SetVisibility extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            color : ['green','nomal','nomal']
        };
        this.showAll = this.showAll.bind(this);
        this.showWaitDo = this.showWaitDo.bind(this);
        this.showComplated = this.showComplated.bind(this);
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                data : store.getState().todos
            });
            data = store.getState();
        })
    }
    showAll() {
        dispatch(setVisibility("SHOW_ALL"));
        this.setState({
            data : store.getState().todos,
            color : ['green','nomal','nomal']
        });
    }
    showWaitDo() {
        dispatch(setVisibility("SHOW_WAITDO"));
        this.setState({
            data : store.getState().todos,
            color : ['nomal','green','nomal']
        });
    }
    showComplated() {
        dispatch(setVisibility("SHOW_COMPLATED"));
        this.setState({
            data : store.getState().todos,
            color : ['nomal','nomal','green']
        });
    }
    render() {
        return (
            <div className = "setVisibility">
                <div className = "type">
                    <span className = "item">显示类型:</span>
                    <div className = { this.state.color[0] } onClick = { this.showAll }>全部</div>
                    <div className = { this.state.color[1] } onClick = { this.showWaitDo }>待完成</div>
                    <div className = { this.state.color[2] } onClick = { this.showComplated }>已完成</div>
                </div>
            </div>
        );
    }
};

SetVisibility = connect()(SetVisibility);
export default SetVisibility;