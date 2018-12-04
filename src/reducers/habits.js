import { FETCH_HABITS_REQUEST, FETCH_HABITS_SUCCESS, FETCH_HABITS_ERROR, FETCH_NAMES_REQUEST, FETCH_NAMES_SUCCESS, FETCH_NAMES_ERROR, ADD_HABIT_SUCCESS, CHECK_HABIT_SUCCESS, CHANGE_DAY, REMOVE_HABIT_SUCCESS, ADD_HABIT_ERROR } from '../actions/habits'

const initialState = {
    days: [{ date: 0, _id: 1, habits: [] }],
    loading: false,
    error: null,
    day: 0,
    addedHabit: '',
    habits: [{ _id: 2, name: 'habit' }]
}

export default (state = initialState, action) => {

    if (action.type === FETCH_HABITS_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === FETCH_NAMES_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === FETCH_HABITS_SUCCESS) {
        return {
            ...state,
            days: action.days,
            loading: false,
            error: null
        }
    }
    else if (action.type === FETCH_NAMES_SUCCESS) {
        return {
            ...state,
            habits: action.habits,
            loading: false,
            error: null
        }
    }
    else if (action.type === FETCH_HABITS_ERROR) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }
    else if (action.type === FETCH_NAMES_ERROR) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }
    else if (action.type === ADD_HABIT_SUCCESS) {
        return {
            ...state,
            error: null,
            addedHabit: action.data,
            habits: [...state.habits, action.data]
        }
    }

    else if (action.type === ADD_HABIT_ERROR) {
        return {

        ...state,
        error: action.error,
        loading: false
        }
    }

    else if (action.type === REMOVE_HABIT_SUCCESS) {
        let updatedHabits = state.habits.filter(habit => {
            return habit._id !== action.id
        })

        return {
            ...state,
            habits: updatedHabits
        }
    }
    else if (action.type === CHECK_HABIT_SUCCESS) {
        console.log(action.data)

        let updateIndex;
        for (let i = 0; i < state.days.length; i++) {
            if (state.days[i]._id === action.data._id) {
                updateIndex = i
                break;
            }
        }
        console.log(updateIndex)






        // return Object.assign({}, state, {
        //    days : Object.assign({}, state.days, {
        //        [action.day] : Object.assign({}, state.days[action.day], {
        //            habits : modArray
        //        })
        //    } )
        // })

        return {
            ...state,
            days: [...state.days.slice(0, updateIndex), action.data, ...state.days.slice(updateIndex + 1)]
        }
    }
    else if (action.type === CHANGE_DAY) {

        let newDay;
        if (action.direction === 'next' && state.day < state.days.length - 1) {
            newDay = state.day + 1
        } else if (action.direction === 'prev' && state.day > 0) {
            newDay = state.day - 1
        } else if (!action.direction) {
            newDay = action.day
        } else {
            newDay = state.day
        }

        return {
            ...state,
            day: newDay
        }
    }
    return state;
};
