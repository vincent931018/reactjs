/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { connect } from 'react-redux';
import store from '../common/store';

class AddTodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                data: store.getState().todos
            })
        })
    }
    onTodoClick(id) {
        store.dispatch(changeTodo(id));
    }
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                    { this.state.data.map( t => <li key = { t.id } className = { t.isComplated ? 'isComplated' : ''} onClick = { this.onTodoClick }>{t.text}</li>) }
                </ul>
            </div>
        );
    }
};

AddTodoList = connect()(AddTodoList);

export default AddTodoList;