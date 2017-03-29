/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import todoApp from '../reducers/index';
import { addTodo } from '../action/actions';

let input;
let store = createStore(todoApp);

class AddTodoBtn extends React.Component {
    addTodo() {
        if(input.value){
            store.dispatch(addTodo(input.value));
            console.log(store.getState());
        }
    }
    render() {
        return (
            <div className = "addTodoBtn" >
                <input ref = { node => { input = node } } className = "add_value" />
                <div className = "add_waitDo" onClick = { this.addTodo } > 添加待办</div>
            </div>
        );
    }
}

AddTodoBtn = connect()(AddTodoBtn);
export default AddTodoBtn;
