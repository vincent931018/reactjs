/**
 * @author caowencheng <845982120@qq.com>
 * created on 30.03.2017
 */
import { createStore } from 'redux';

import todoApp from '../reducers/index';

import AddTodo from '../components/AddTodo.jsx';

let store = createStore(todoApp);

export default store;

