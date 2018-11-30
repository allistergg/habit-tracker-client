import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/habits';
import authReducer from './reducers/auth';

export default createStore(combineReducers({
    data: reducer,
    auth: authReducer
 }), applyMiddleware(thunk));