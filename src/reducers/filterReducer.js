const reducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
    case 'SET_FILTER':
        return action.data
    default:
        return state
    }  
}

// MAKE A COMPONENT AND ACTION CREATORS FOR THIS

export default reducer