import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            return (<th key={index}><Link className="dayLinks" to="/dashboard" onClick={() => {
                console.log('clicked');
                this.changeDay(index)

            }}>{weekDays[index][0]}</Link></th>)
        })

        let displayList = days.map((day, index) => {
            console.log(day)
            return (<p key={index}>
                {weekDays[index]} : {'✔'.repeat(day.habits.filter(habit => habit.checked === true).length)}
                ({day.habits.filter(habit => habit.checked === true).length} / {day.habits.length})
            </p>)
        })

        let habitsList = days[this.props.day].habits.map((habit, index) => <tr key={index}><td className="habit-name">{habit.habit.name}</td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[0]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[0]}`} aria-label={`${habit.habit.name}-${weekDays[0]}`} checked={days[0].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[1]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[1]}`} aria-label={`${habit.habit.name}-${weekDays[1]}`} checked={days[1].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[2]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[2]}`} aria-label={`${habit.habit.name}-${weekDays[2]}`} checked={days[2].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[3]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[3]}`} aria-label={`${habit.habit.name}-${weekDays[3]}`} checked={days[3].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[4]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[4]}`} aria-label={`${habit.habit.name}-${weekDays[4]}`} checked={days[4].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[5]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[5]}`} aria-label={`${habit.habit.name}-${weekDays[5]}`} checked={days[5].habits[index].checked} /></td>
            <td className="checkbox"><input onChange={() => this.checkHabit(days[6]._id, habit.habit._id)} type="checkbox" title={`${habit.habit.name}-${weekDays[6]}`} aria-label={`${habit.habit.name}-${weekDays[6]}`} checked={days[6].habits[index].checked} /></td>
        </tr>)
        return (
            <div>
                <div>
                    <table className="weekTable">
                        <tbody>
                            <tr>
                                <th>Habit</th>
                                {dayList}
                            </tr>
                            {habitsList}
                        </tbody>
                    </table>
                </div>

                <div>{displayList}</div>
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



export default connect(mapStatetoProps)(weekHabits)