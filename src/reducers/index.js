import { combineReducers } from 'redux';
import {CHOOSE_SERVICE, NEAREST_SERVICES, NEAREST_GAS_STATIONS} from '../actions';

const serviceReducer = (state = {}, action) => {
    switch (action.type) {
        case CHOOSE_SERVICE :
            return {
                id: action.id,
                name: action.name
            };
        default: return state;
    }
};

const radiusPointsReducer = (state = {}, action) => {
    switch (action.type) {
        case NEAREST_GAS_STATIONS :
            return {
                ...state,
                gasStations: action.stations
            };
        case NEAREST_SERVICES:
            return {
                ...state,
                services: action.services
            };
        default: return state;
    }
};


export function getReducersObject () {
    return {
        selectedService: serviceReducer,
        radiusPoints: radiusPointsReducer,
    };
}

export default combineReducers(getReducersObject());