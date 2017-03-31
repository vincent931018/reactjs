/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action/actions';
import store from '../common/store';

let input;

class AddTodoBtn extends React.Component {
    addTodo() {
        if(input.value){
            store.dispatch(addTodo(input.value));
            console.log(store.getState());
            input.value = '';
        }else{
            alert('请输入正确的待办事项！');
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
