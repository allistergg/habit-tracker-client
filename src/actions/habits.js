import { API_BASE_URL } from '../config';

export const FETCH_HABITS_REQUEST = 'FETCH_HABITS_REQUEST';
export const fetchHabitsRequest = () => ({
    type: FETCH_HABITS_REQUEST
})
export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS';
export const fetchHabitsSuccess = days => ({
    type: FETCH_HABITS_SUCCESS,
    days
})

export const FETCH_HABITS_ERROR = 'FETCH_HABITS_ERROR';
export const fetchHabitsError = error => ({
    type: FETCH_HABITS_ERROR,
    error
})

export const FETCH_NAMES_REQUEST = 'FETCH_NAMES_REQUEST';
export const fetchNamesRequest = () => ({
    type: FETCH_NAMES_REQUEST
})

export const FETCH_NAMES_SUCCESS = 'FETCH_NAMES_SUCCESS';
export const fetchNamesSuccess = habits => ({
    type: FETCH_NAMES_SUCCESS,
    habits
})

export const FETCH_NAMES_ERROR = 'FETCH_NAMES_ERROR';
export const fetchNamesError = error => ({
    type: FETCH_NAMES_ERROR,
    error
})

export const ADD_HABIT_SUCCESS = 'ADD_HABIT_SUCCESS';
export const addHabitSuccess = data => ({
    type: ADD_HABIT_SUCCESS,
    data
})

export const CHECK_HABIT_SUCCESS = 'CHECK_HABIT_SUCCESS';
export const checkHabitSuccess = (data) => ({
    type: CHECK_HABIT_SUCCESS,
    data
})

export const CHANGE_DAY = 'CHANGE_DAY';
export const changeDayAction = (day, direction) => ({
    type: CHANGE_DAY,
    day,
    direction
}
)

export const REMOVE_HABIT_SUCCESS = 'REMOVE_HABIT_SUCCESS';
export const removeHabitSuccess = id => ({
    type: REMOVE_HABIT_SUCCESS,
    id
})

export const removeHabit = id => dispatch => {
    return fetch(`${API_BASE_URL}/habits/${id}`, {
        method: 'DELETE'
    })
    .then(dispatch(removeHabitSuccess(id)))
}



export const addHabit = newHabit => dispatch => {
    
    console.log(newHabit)
    return fetch(`${API_BASE_URL}/habits`, {
        method: 'POST',
        body: JSON.stringify({name : newHabit}),
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

    return fetch(`${API_BASE_URL}/habits`)
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

export const fetchNames = () => dispatch => {
    dispatch(fetchNamesRequest())

    return fetch(`${API_BASE_URL}/habits/names`)
    .then(res => {
        return res.json()
    })
    .then((data) => {
        dispatch(fetchNamesSuccess(data))
    })
    .catch((err) => dispatch(fetchNamesError(err)))
}

export const checkHabitAction = (day, id) => dispatch => {

    return fetch(`${API_BASE_URL}/habits`, {
        method: 'PUT',
        body: JSON.stringify({"id" : id, "day" : day}),
        headers: {
            'Content-Type': 'application/json',
            'accept' : 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
        dispatch(checkHabitSuccess(data))
    })
}