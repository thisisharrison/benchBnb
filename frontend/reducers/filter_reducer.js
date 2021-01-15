import { UPDATE_FILTERS } from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_FILTERS:
            return Object.assign({}, action.value )
        default: 
            return state;
    }
}

export default filterReducer;