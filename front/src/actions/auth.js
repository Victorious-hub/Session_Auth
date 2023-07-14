import Cookies from 'js-cookie';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, AUTHENTICATED_FAIL, AUTHENTICATED_SUCCESS,
} from './types';
import { load_user } from './profile';
export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.get(`http://127.0.0.1:8000/authenticated`, config);

        if (res.data.error || res.data.isAuthenticated === 'error') {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            });
        }
        else if (res.data.isAuthenticated === 'success') {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: true
            });
        }
        else {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            });
        }
    } catch(err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
        });
    }
};


export const login = (username,password) => async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({username,password})
    try{
        const res = await axios.post(`http://127.0.0.1:8000/login`, body, config);
        if(res.data.success)
        {
            dispatch({
                type: LOGIN_SUCCESS,
            })
            dispatch(load_user());
        }
        else {
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }catch{
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password, re_password });

    try {
        const res = await axios.post(`http://127.0.0.1:8000/register`, body, config);

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

export const logout =() => async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({
        withCredentials: true
    });

    try{
        const res = await axios.post(`http://127.0.0.1:8000/logout`, body, config);
        if(res.data.success)
        {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }
        else {
            dispatch({
                type: LOGOUT_FAIL
            })
        }
    }catch{
        dispatch({
            type: LOGOUT_FAIL
        })
    }
};