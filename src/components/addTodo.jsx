/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

import AddTodoBtn from './addTodoBtn.jsx';
import AddTodoList from './addTodoList.jsx';
import SetVisibility from './setVisibility.jsx';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
        };
        this.handleData = this.handleData.bind(this);
    }
    handleData(data) {
        this.state.items.push(data);
        this.setState(this.state);
    }
    render() {
        return (
            <div className = "addTodo">
                <div className = "add_container">
                <div className = "add_title">我的待办事项</div>
                    <AddTodoBtn handleData = { this.handleData }/>
                    <AddTodoList data = { this.state.items }/>
                    <SetVisibility/>
                </div>
            </div>
        );
    }
};

export default AddTodo;