import React from 'react';
import { connect } from 'react-redux';
import { addHabit } from '../actions/habits.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Habits from './habits';
import weekHabits from './week-habits';


export function AddHabit(props) {
    let habitInput = null
    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(addHabit(habitInput.value))
        console.log(habitInput.value)
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input ref={input => (habitInput = input)}></input>
                <button>Add</button>
            </form>
        </div>




    )
}


export default connect()(AddHabit);