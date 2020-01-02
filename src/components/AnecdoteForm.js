import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.content.value
        event.target.content.value = ''
        store.dispatch(createAnecdote(anecdote))
        store.dispatch(setMessage('Note added'))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='content' type='text' /></div>
                <button >create</button>
            </form>
        </div>
  )
}

export default AnecdoteForm