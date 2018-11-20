import {FETCH_HABITS_REQUEST, FETCH_HABITS_SUCCESS, FETCH_HABITS_ERROR, ADD_HABIT_SUCCESS, CHECK_HABIT_SUCCESS} from '../actions/habits'

const initialState = {
    habits: [],
    loading: false,
    error: null
}

export default (state=initialState, action) => {
    
    if (action.type === FETCH_HABITS_REQUEST) {
        return  {
            ...state, 
            loading: true
        }
    }
    else if (action.type === FETCH_HABITS_SUCCESS) {
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
    else if (action.type === ADD_HABIT_SUCCESS) {
        return {
            ...state,
            habits : [...state.habits, action.habit]
        }
    }
    else if (action.type === CHECK_HABIT_SUCCESS) {
        const modArray = state.habits.map(obj => obj)
        for (let i = 0; i < modArray.length; i++) {
            if (modArray[i].id === action.id) {
                modArray[i].checked = !modArray[i].checked;
                break;
            } 
        }
        console.log(modArray);
        
        
        return {
            ...state,
            habits : modArray
        }
    }
    return state;
};
