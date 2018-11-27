import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchHabits, checkHabitAction, changeDayAction } from '../actions/habits';

export class weekHabits extends React.Component {

    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchHabits())
    }

    checkHabit(day, id) {
        console.log(id);
        this.props.dispatch(checkHabitAction(day, id))
    }

    changeDay(day, direction) {
        this.props.dispatch(changeDayAction(day, direction))
    }
    
    render() {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let days = this.props.days
        console.log(days)
        let dayList = days.map((day, index) => {
            return (<Link to="/" onClick={() => {
            console.log('clicked');
            this.changeDay(day)
            
        }}>{weekDays[index]}</Link>)
        })
        
        let displayList = days.map((day, index) => {
            console.log(day)
            return (<p>
                {weekDays[index]} : {day.habits.filter(habit => habit.checked === true).length} / {day.habits.length}
            </p>)
        })
        
        let habitsList = days[this.props.day].habits.map((habit, index) => <p>{habit.habit.name}
        <input onChange={() => this.checkHabit(days[0]._id, habit.habit._id)} type="checkbox" checked={days[0].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[1]._id, habit.habit._id)} type="checkbox" checked={days[1].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[2]._id, habit.habit._id)} type="checkbox" checked={days[2].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[3]._id, habit.habit._id)} type="checkbox" checked={days[3].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[4]._id, habit.habit._id)} type="checkbox" checked={days[4].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[5]._id, habit.habit._id)} type="checkbox" checked={days[5].habits[index].checked} />
        <input onChange={() => this.checkHabit(days[6]._id, habit.habit._id)} type="checkbox" checked={days[6].habits[index].checked} />
        </p>)
        return (
            <div>
                <div>{dayList}</div>
                <div>{habitsList}</div>
                <div>{displayList}</div>
                    
                   
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