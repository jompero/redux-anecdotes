import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    const { filter, changeFilter } = props

    const setFilter = (event) => {
        changeFilter(event.target.value)
    }

    return (
        <div>
            <input text={filter} onChange={setFilter} placeholder='Filter...' type='text' />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    changeFilter,
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Filter)