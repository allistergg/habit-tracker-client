import { API_BASE_URL } from '../config';

export const FETCH_HABITS_REQUEST = 'FETCH_HABITS_REQUEST';
export const fetchHabitsRequest = () => ({
    type: FETCH_HABITS_REQUEST
})
export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS';
export const fetchHabitsSuccess = habits => ({
    type: FETCH_HABITS_SUCCESS,
    habits
})

export const FETCH_HABITS_ERROR = 'FETCH_HABITS_ERROR';
export const fetchHabitsError = error => ({
    type: FETCH_HABITS_ERROR,
    error
})

export const ADD_HABIT_SUCCESS = 'ADD_HABIT_SUCCESS';
export const addHabitSuccess = habit => ({
    type: ADD_HABIT_SUCCESS,
    habit
})

export const CHECK_HABIT_SUCCESS = 'CHECK_HABIT_SUCCESS';
export const checkHabitSuccess = id => ({
    type: CHECK_HABIT_SUCCESS,
    id
})



export const addHabit = newHabit => dispatch => {
    
    console.log(newHabit)
    return fetch(`${API_BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify({"habit" : newHabit}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        dispatch(addHabitSuccess(data))
    })
    .catch(err => console.log(err))
}

export const fetchHabits = () => dispatch => {

    dispatch(fetchHabitsRequest())

    return fetch(`${API_BASE_URL}`)
        .then(res => {
            console.log(res)
            return res.json()
        })

        .then((data) => {
            console.log(data)
            dispatch(fetchHabitsSuccess(data))
        })
        .catch((err) => dispatch(fetchHabitsError(err)))

    }

export const checkHabitAction = id => dispatch => {

    return fetch(`${API_BASE_URL}`, {
        method: 'PUT',
        body: JSON.stringify({"id" : id}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        dispatch(checkHabitSuccess(data.id))
    })
}