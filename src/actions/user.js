
import { API_BASE_URL } from '../config';
import { authError, authRequest } from './auth'
import {normalizeResponseErrors} from './utils'



export const registerUser = user => dispatch => {
    dispatch(authRequest())
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))    
    .then(res => {
            console.log(res)
            res.json()
        })
        .catch(err => {
            console.log(err)
            dispatch(authError(err))
            throw err;

        });
};