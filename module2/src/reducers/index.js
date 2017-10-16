import { combineReducers } from 'redux';
import {PING} from '../actions';

const pingReducer = (state = {}, action) => {
    switch (action.type) {
        case PING :
            return { message: action.message };
        default:
            return state;
    }
};


export function getReducersObject () {
    return {
        pinged: pingReducer
    };
}

export default combineReducers(getReducersObject());