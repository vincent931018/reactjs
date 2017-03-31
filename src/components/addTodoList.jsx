/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { connect } from 'react-redux';
import store from '../common/store';

import { changeTodo } from '../action/actions';

let curruntData = {setVisibility : '',todos : []};

class AddTodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
        this.onTodoClick = this.onTodoClick.bind(this);
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                data : filterData(store.getState()).todos
            })
        });
    }
    onTodoClick(e) {
        store.dispatch(changeTodo(e.target.id/1));
    }
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                    { this.state.data.map( t => <li key = { t.id } id = { t.id } className = { t.isComplated ? 'isComplated' : ''} onClick = { this.onTodoClick }>{t.text}</li>) }
                </ul>
            </div>
        );
    }
};

const filterData = data => {
    switch (data.setVisibility) {
        case "SHOW_ALL" :
            return data;
            break;
        case "SHOW_WAITDO" :
            curruntData.setVisibility = 'SHOW_WAITDO';
            curruntData.todos = [];
            data.todos.map( t => {
                if(!t.isComplated){curruntData.todos.push( t )}
            });
            return curruntData;
            break;
        case "SHOW_COMPLATED" :
            curruntData.setVisibility = 'SHOW_WAITDO';
            curruntData.todos = [];
            data.todos.map( t => {
                if(t.isComplated){curruntData.todos.push( t )}
            });
            return curruntData;
            break;
        default :
            return data;
    }
}

AddTodoList = connect()(AddTodoList);

export default AddTodoList;