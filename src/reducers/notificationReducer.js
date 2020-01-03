const reducer = (state = { message: '', id: 0 }, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
    case 'SET':
        return action.data
    case 'RESET':
        if (action.data !== state.id) return state
        return { ...state, message: ''}
    default:
        return state
    }  
}

// With id, I can make sure that the previous timeOut doesn't reset a newer notification too early
let nextId = 1;
export const setNotification = (message, time) => {
    let thisId = nextId
    nextId++
    return async dispatch => {
        dispatch({
            type: 'SET',
            data: { message, id: thisId }
        })
        setTimeout(() => {
            dispatch({
                type: 'RESET',
                data: thisId
            })
        }, time * 1000)
    }
}

export const resetNotification = () => {
    return { type: 'RESET' }
}
  
export default reducer