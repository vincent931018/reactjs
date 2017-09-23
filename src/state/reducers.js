// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 }
        default:
            return state
    }
}

function reducer(state, action) {
    return {
        counter: counter(state.counter, action)
    }
}

export default reducer