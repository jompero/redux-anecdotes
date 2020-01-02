const initialState = {
    message: '',
    time: Date()
}

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
    case 'SET':
        return { ...action.data }
    case 'RESET':
        return initialState
    default:
        return state
    }  
}
  
export const setMessage = (message) => {
    return {
      type: 'SET',
      data: { message, time: Date() }
    }
}

export const resetMessage = () => {
    return { type: 'RESET' }
}
  
export default reducer