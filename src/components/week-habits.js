import React from 'react';
import { connect } from 'react-redux';
import { fetchHabits, checkHabitAction } from '../actions/habits';

export class weekHabits extends React.Component {

    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchHabits())
    }

    checkHabit(day, id) {
        console.log(id);
        this.props.dispatch(checkHabitAction(day, id))
    }
    
    render() {
        let days = Object.keys(this.props.days)
        console.log(days)
        let dayList = days.map(day => <span>{day[0]}</span>)
        let habitsList = this.props.days[this.props.day].habits.map(habit => <p>{habit.habit}
        <input onChange={() => this.checkHabit("Monday", habit.id)} type="checkbox" checked={this.props.days.Monday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Tuesday", habit.id)} type="checkbox" checked={this.props.days.Tuesday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Wednesday", habit.id)} type="checkbox" checked={this.props.days.Wednesday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Thursday", habit.id)} type="checkbox" checked={this.props.days.Thursday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Friday", habit.id)} type="checkbox" checked={this.props.days.Friday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Saturday", habit.id)} type="checkbox" checked={this.props.days.Saturday.habits[habit.id].checked} />
        <input onChange={() => this.checkHabit("Sunday", habit.id)} type="checkbox" checked={this.props.days.Sunday.habits[habit.id].checked} />
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