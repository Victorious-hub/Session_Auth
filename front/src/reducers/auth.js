import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actions/types';

const initialState = {
    isAuthenticated: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_FAIL:
            return state
        default:
            return state
    }
};