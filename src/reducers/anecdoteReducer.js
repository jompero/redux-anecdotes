import anecdotesService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'VOTE':
      return state.map((anecdote) => anecdote.id === action.data.id 
        ? { ...anecdote, votes: anecdote.votes + 1 }
        : anecdote)
    case 'CREATE':
      return [ ...state, action.data ]
    default:
      return state
  }  
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdote = await anecdotesService.voteAnecdote(id)
    dispatch({
      type: 'VOTE',
      data: anecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdotesService.createAnecdote(content)
    dispatch({
      type: 'CREATE',
      data: anecdote
    })
  }
}

export default reducer