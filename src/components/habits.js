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

        console.log(this.props.days[day])
        let habitList = this.props.days[day].habits.map((habit) => {
            return <li key={habit.id}>{habit.habit}<input onChange={() => this.checkHabit(day, habit.id)} type="checkbox" checked={habit.checked} /></li>
        })


        return (

            
                <div>
                    <h1> <button onClick={() => {
                        console.log('clicked');
                        this.changeDay(this.props.day, 'prev')
                    }}>Prev</button>
                        {this.props.day}
                        <button onClick={() => {
                            console.log('clicked');
                            this.changeDay(this.props.day, 'next')
                        }}>Next</button>
                    </h1>
                    
                    <ul>{habitList}</ul>
                    {/* <AddHabit /> */}
                    <p>{this.props.days[this.props.day].habits.filter(habit => habit.checked === true).length}/ {this.props.days[this.props.day].habits.length}</p>
                    
                    
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