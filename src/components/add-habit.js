import React from 'react';
import { connect } from 'react-redux';
import { addHabit } from '../actions/habits.js'



export function AddHabit(props) {
    let habitInput = null
    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(addHabit(habitInput.value))
        console.log(habitInput.value)
        habitInput.value = "";
    }
    let output;
    if (props.addedHabit && !props.error) {
        output = <p>{props.addedHabit.name} added</p>
    } else if (props.error) {
        output = <p className="error">{props.error.message}</p>
    } else {
        output = <p></p>
    }
    return (
        <div>
            <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
                <input ref={input => (habitInput = input)}></input>
                <button className="habit-button">Add</button>
            </form>
            <div>
                {output}
            </div>
        </div>
    )
}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        addedHabit: state.data.addedHabit,
        error: state.data.error
    }
}

export default connect(mapStatetoProps)(AddHabit);