/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

class AddTodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : this.props.data
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(e) {
        for(var i =0 ; i < this.state.items.length; i++){
            if(this.state.items[i].id === e.target.id/1){
                this.state.items[i].isComplated = (this.state.items[i].isComplated === 'isComplated') ? 'noComplated' : 'isComplated';
            }
        }
        this.setState(this.state);
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                    { this.state.items.map( (item) => <li onClick = { this.changeState } id = { item.id } className = { item.isComplated + " " + item.visibility }> { item.text } </li> ) }
                </ul>
            </div>
        );
    }
};

export default AddTodoList;