import React from 'react';
import { connect } from 'react-redux';
import { fetchNames, removeHabit } from '../actions/habits';

export class EditHabit extends React.Component {

    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchNames())
    }

    handleClick = (id) => {
        console.log(id)
        this.props.dispatch(removeHabit(id))
        }

    render() {

        let habitsList = this.props.habits.map(habit => {
            return <tr><td className="habit-name">{habit.name}</td><td><button onClick={() => this.handleClick(habit._id)}className="habit-button">Remove</button></td></tr>
        })

        return (
            <div>
            <h1>Remove a Habit</h1>
            <table><tbody>{habitsList}</tbody></table>
            </div>
        )
    }
}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        
        habits : state.habits
    }
}



export default connect(mapStatetoProps)(EditHabit);