/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import todoApp from '../reducers/index';
import { addTodo } from '../action/actions';

let store = createStore(todoApp);

class AddTodoList extends React.Component {
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                </ul>
            </div>
        );
    }
};

const getVisibility = (todos, filter) => {
    switch (filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_WAITDO":
            return todos.filter( t => t.isComplated );
        case "SHOW_ISCOMPLATED":
            return todos.filter( t => !t.isComplated );
    }
};

const mapStateToprops = (state) => {
    return {
        todos: getVisibility(state.todos,state.Filter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick : (id) => {
            dispatch(changState(id))
        }
    }
};



AddTodoList = connect(
    mapStateToprops,
    mapDispatchToProps
)(AddTodoList);
export default AddTodoList;