import { combineReducers } from 'redux';
import {CHOOSE_SERVICE} from '../actions';

const serviceReducer = (state = {}, action) => {
    switch (action.type) {
        case CHOOSE_SERVICE :
        const selectedService = {
            id: action.id,
            name: action.name
        };
        return selectedService;
        default: return state;
    }
};


export function getReducersObject () {
    return {
        selectedService: serviceReducer
    };
}

export default combineReducers(getReducersObject());