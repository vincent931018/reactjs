/**
 * @author caowencheng <845982120@qq.com>
 * created on 29.03.2017
 */
let idCount = 0;

const addTodo = (text) => ({
    type : "ADD_TODO",
    id : idCount++,
    text
});

const changeTodo = (id) => ({
    type : "CHANGE_TODO",
    id
});

const setVisibility = (filter) => ({
    type : "SETVISIBILITY_TODO",
    filter
});

module.exports = {
    addTodo : addTodo,
    changeTodo : changeTodo,
    setVisibility : setVisibility
};
