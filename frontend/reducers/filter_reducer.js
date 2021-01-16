import { UPDATE_FILTERS } from '../actions/filter_actions';

const defaultState = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10
}

const filterReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_FILTERS:
            return Object.assign({}, state, { [action.filter] : action.value } )
        default: 
            return state;
    }
}

export default filterReducer;