
import {API_BASE_URL} from '../config';
import { authError} from './auth'


export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
       .then(res => res.json())
        .catch(err => {
            dispatch(authError(err))
            
        });
};