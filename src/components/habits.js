import React from 'react';
import { connect } from 'react-redux';
import { fetchHabits, checkHabitAction, changeDayAction } from '../actions/habits';

import AddHabit from './add-habit';


export class Habits extends React.Component {

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
        let day = this.props.day
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        console.log(day)
        let habitList = this.props.days[day].habits.map((habit) => {
            return <li key={habit.habit._id}>{habit.habit.name}<input onChange={() => this.checkHabit(this.props.days[day]._id, habit.habit._id)} type="checkbox" checked={habit.checked} /></li>
        })


        return (

            
                <div>
                    <h1> <button onClick={() => {
                        console.log('clicked');
                        this.changeDay(this.props.day, 'prev')
                    }}>Prev</button>
                        {weekDays[day]}
                        <button onClick={() => {
                            console.log('clicked');
                            this.changeDay(this.props.day, 'next')
                        }}>Next</button>
                    </h1>
                    
                    <ul>{habitList}</ul>
                    {/* <AddHabit /> */}
                    <p>{this.props.days[day].habits.filter(habit => habit.checked === true).length}/ {this.props.days[day].habits.length}</p>
                    
                    
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



export default connect(mapStatetoProps)(Habits)