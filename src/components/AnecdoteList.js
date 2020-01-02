import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const { store } = props
    const { anecdotes } = store.getState()

    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(voteAnecdote(id))
        store.dispatch(setMessage(`You voted for ${anecdotes.find((anecdote) => anecdote.id === id).content}`))
    }

    const sortedAnecdotes = () => {
        console.log('sorting')
        return anecdotes
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )
    }

    return (
        <div>{sortedAnecdotes()}</div>
    )
}

export default AnecdoteList