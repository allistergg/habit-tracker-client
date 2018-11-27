import {FETCH_HABITS_REQUEST, FETCH_HABITS_SUCCESS, FETCH_HABITS_ERROR, ADD_HABIT_SUCCESS, CHECK_HABIT_SUCCESS, CHANGE_DAY} from '../actions/habits'

const initialState = {
    days : [{date : new Date('2018-11-26'), _id : 1 , habits : []}],
    loading: false,
    error: null,
    day: 0
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
            days : action.days,
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
         console.log(action.data)

         
        // const modArray = state.days[action.day].habits.map(item => Object.assign({}, item))
        // for (let i = 0; i < modArray.length; i++) {
        //     if (modArray[i].id === action.id) {
        //         modArray[i].checked = !modArray[i].checked;
        //         break;
        //     } 
        // }

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
            days : [...state.days.slice(0, updateIndex), action.data, ...state.days.slice(updateIndex + 1)]
        }
    }
    else if (action.type === CHANGE_DAY) {
        let newDay;
        let newDayId;
        console.log(action.day)
        if (action.direction === 'next') {
            newDayId = state.days[action.day].dayId + 1
        } else if (action.direction === 'prev') {
            newDayId = state.days[action.day].dayId - 1
        } else if (!action.direction) {
            newDayId = state.days[action.day].dayId
        }
        console.log(newDayId)
        for (let day in state.days) {
            console.log(day)
            console.log(state.days[day].dayId)
            if (state.days[day].dayId === newDayId) {
                
                console.log(day)
            
                newDay = day
                console.log(newDay)
                break;
            } else {
                newDay = action.day
            }
        }
        
        return {
            ...state,
            day: newDay
        }
    }
    return state;
};
