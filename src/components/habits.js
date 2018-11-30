import React from 'react';
import { connect } from 'react-redux';
import { fetchHabits, checkHabitAction, changeDayAction } from '../actions/habits';



export class Days extends React.Component {

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
            return <tr><td className="habit-name">{habit.habit.name}</td><td className="checkbox"><input onChange={() => this.checkHabit(this.props.days[day]._id, habit.habit._id)} type="checkbox" checked={habit.checked} /></td></tr>
        })


        return (

            
                <div className="header-container">
                     
                        <h1 className="dayName">{weekDays[day]}</h1>
                        <button className="prev" onClick={() => {
                        console.log('clicked');
                        this.changeDay(this.props.day, 'prev')
                    }}>Prev</button>
                        <button className="next" onClick={() => {
                            console.log('clicked');
                            this.changeDay(this.props.day, 'next')
                        }}>Next</button>
                    
                    
                    <table>
                    <tbody>
                    <tr>
                        <th>Habit</th>
                        <th>Done?</th>
                    </tr>
                    {habitList}
                    </tbody>
                    </table>
                  
                    <p>
                    {'✔'.repeat(this.props.days[day].habits.filter(habit => habit.checked === true).length)}
                    ({this.props.days[day].habits.filter(habit => habit.checked === true).length}/ {this.props.days[day].habits.length})</p>
                    
                    
                </div>
        



        )
    }
}


export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        days: state.data.days,
        day: state.data.day
    }
}



export default connect(mapStatetoProps)(Days)