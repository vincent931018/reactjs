/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

import AddTodoBtn from './addTodoBtn.jsx';
import AddTodoList from './addTodoList.jsx';
import SetVisibility from './setVisibility.jsx';

import store from '../common/store';

class AddTodo extends React.Component {
    render() {
        return (
            <div className = "addTodo">
                <div className = "add_container">
                <div className = "add_title">我的待办事项</div>
                    <AddTodoBtn/>
                    <AddTodoList/>
                    <SetVisibility/>
                </div>
            </div>
        );
    }
};

export default AddTodo;