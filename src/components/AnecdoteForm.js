import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.content.value
        event.target.content.value = ''
        props.createAnecdote(anecdote)
        props.setNotification('Note added', 5)
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

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)