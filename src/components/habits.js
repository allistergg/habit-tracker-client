import React from 'react';
import {connect} from 'react-redux';
import {fetchHabits, checkHabitAction} from '../actions/habits';
import AddHabit from './add-habit';


export class Habits extends React.Component {
    
    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchHabits())
    }
    
    checkHabit(id) {
        console.log(id);
        this.props.dispatch(checkHabitAction(id))
    }
    
    render () {
        
        let habitList = this.props.habits.map((habit) => {
            return <li key={habit.id}>{habit.habit}<input onChange={() => this.checkHabit(habit.id)}type="checkbox" checked={habit.checked} /></li>
        })

    
    return (
        
        
        <div>
            <ul>{habitList}</ul>
            <AddHabit />
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



export default connect(mapStatetoProps)(Habits)