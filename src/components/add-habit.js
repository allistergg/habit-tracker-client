import React from 'react';
import {connect} from 'react-redux';
import {addHabit} from '../actions/habits.js'

export function AddHabit(props) {
    let habitInput = null
    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(addHabit(habitInput.value))
        console.log(habitInput.value)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={input => (habitInput = input)}></input>
            <button>Add</button>
        </form>
    )
}


export default connect()(AddHabit);