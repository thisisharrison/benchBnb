import { 
    RECEIVE_BENCHES,
    RECEIVE_BENCH
} from '../actions/bench_actions';

const defaultState = {
    id: '', 
    description: '', 
    lat: '', 
    lng: ''
};

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES: 
            return action.benches;
        case RECEIVE_BENCH:
            return Object.assign({}, state, action.bench);
        default: 
            return state;
    }
}

export default benchesReducer;