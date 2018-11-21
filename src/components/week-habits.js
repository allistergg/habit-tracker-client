import React from 'react';
import { connect } from 'react-redux';
import { fetchHabits, checkHabitAction } from '../actions/habits';

export class weekHabits extends React.Component {

    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchHabits())
    }

    render() {
        let days = Object.keys(this.props.days)
        console.log(days)
        let dayList = days.map(day => <span>{day[0]}</span>)
        let habitsList = this.props.days[this.props.day].habits.map(habit => <p>{habit.habit}
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        </p>)
        return (
            <div>
                <div>{dayList}</div>
                <div>{habitsList}</div>
            </div>
        )
    }


}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        days: state.days,
        day: state.day
    }
}



export default connect(mapStatetoProps)(weekHabits)