import { RECEIVE_CURRENT_USER } from '../../../../benchBnb-solution/frontend/actions/session_actions';
import {
    RECEIEVE_CURRENT_USER,
    RECEIEVE_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIEVE_SESSION_ERRORS:
            return action.errors;
        case RECEIEVE_CURRENT_USER:
            return []
        default: 
            return state;
    }
}

export default sessionErrorsReducer;