import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const { visibleAnecdotes, initializeAnecdotes } = props

    useEffect(() => {
        initializeAnecdotes()
    }, [initializeAnecdotes])

    const vote = (id) => {
        console.log('vote', id)
        props.voteAnecdote(id)
        props.setNotification(`You voted for ${visibleAnecdotes.find((anecdote) => anecdote.id === id).content}`, 5)
    }

    return (
        <div>{visibleAnecdotes
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
            )}</div>
    )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
    console.log('Anecdotes:', anecdotes, 'Filter:', filter)
    return anecdotes
        .filter(anecdote => anecdote.content.includes(filter))
        .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        visibleAnecdotes: anecdotesToShow(state),
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    initializeAnecdotes
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(AnecdoteList)