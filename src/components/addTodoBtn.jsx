/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

class AddTodoBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        var cur_items = this.state.items.push(this.refs.item_val.value);
        this.props.items = { items : cur_items };
    }
    render() {
        return (
            <div className = "addTodoBtn">
                <input ref = "item_val" className = "add_value"/>
                <div className = "add_waitDo" onClick = { this.addItem }>添加待办</div>
            </div>
        );
    }
};

export default AddTodoBtn;