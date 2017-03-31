/**
 * @author caowencheng <845982120@qq.com>
 * created on 29.03.2017
 */
const setVisibility = (state = "SHOW_ALL",action) => {
    switch (action.type) {
        case "SETVISIBILITY_TODO":
            return action.filter;
            break;
        default :
            return state;
    };
};

export default setVisibility;