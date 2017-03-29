/**
 * @author caowencheng <845982120@qq.com>
 * created on 29.03.2017
 */
import { combineReducers } from 'redux';

import todos from './todo';
import setVisibility from './setVisibility';

const todoApp = combineReducers({
    todos,
    setVisibility
});

export default todoApp;