/**
 * @author caowencheng <845982120@qq.com>
 * created on 29.03.2017
 */
const initialState = {};

const todo = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                text : action.text,
                id : action.id,
                isComplated : false
            };
            break;
        case "CHANGE_TODO":
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({},state,{
                isComplated : !state.isComplated
            });
            break;
        default :
            return state;
    };
};

const todos = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,
                todo(undefined,action)
            ];
            break;
        case "CHANGE_TODO":
            return state.map( t => todo(t,action) );
            break;
        default :
            return [...state];
    };
};

export default todos;