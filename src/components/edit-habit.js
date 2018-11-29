import React from 'react';
import { connect } from 'react-redux';
import { fetchNames, removeHabit } from '../actions/habits';
import AddHabit from './add-habit';

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
            return <tr><td className="habit-name">{habit.name}</td><td><button onClick={() => this.handleClick(habit._id)} className="habit-button">Remove</button></td></tr>
        })

        return (
            <div>
                <div>
                    <h1>Add a Habit</h1>
                    <AddHabit />
                </div>
                <div>
                    <h1>Remove a Habit</h1>
                    <table><tbody>{habitsList}</tbody></table>
                </div>
            </div>
        )
    }
}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {

        habits: state.habits
    }
}



export default connect(mapStatetoProps)(EditHabit);