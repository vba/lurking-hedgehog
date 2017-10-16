
import {CHOOSE_SERVICE} from '../actions';

const serviceReducer = (state = {}, action) => {
    switch (action.type) {
        case CHOOSE_SERVICE :
        const selectedService = {
            id: action.id,
            name: action.name
        };
        return selectedService;
    }    
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHOOSE_SERVICE :
        return Object.assign({}, state, {selectedService: serviceReducer(null, action)});

        default:
        return state;
    }
}