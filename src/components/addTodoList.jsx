/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

class AddTodoList extends React.Component {
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                    <li>起床</li>
                    <li>吃饭</li>
                    <li>睡觉</li>
                </ul>
            </div>
        );
    }
};

export default AddTodoList;