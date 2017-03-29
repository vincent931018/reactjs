/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

let idCount = 0;

class AddTodoBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(data) {
        if(this.refs.item_val.value){
            var newData = {
                'id' : idCount++,
                'text' : this.refs.item_val.value,
                'isComplated' : 'noComplated'
            }
            //this.state.items.push(newData);
            //var cur_items = this.state.items
            this.props.handleData(newData);
            this.refs.item_val.value = "";
        }else{
            alert("请输入正确的待办事项！");
        }
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