/**
 * @author caowencheng <845982120@qq.com>
 * created on 29.03.2017
 */
const initialState = {
    text : "",
    id : 0,
    isComplated : false
}

const todo = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                text : action.text,
                id : action.id,
                isComplated : false
            };
        case "CHANGE_TODO":
            if(state.id !== action.id){
                return state;
            }
            return object.assign({},state,{
                isComplated : !state.isComplated
            });
        default :
            return {};
    };
};

const todos = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,
                todo(undefined,action)
            ];
        case "CHANGE_TODO":
            state.map( t => todo(t,action) );
        default :
            return {};
    };
};

export default todos;