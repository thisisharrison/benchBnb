import {
    RECEIVE_REVIEW
} from '../actions/review_actions';
import { 
    RECEIVE_BENCH
} from '../actions/bench_actions';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCH:
            return Object.assign({}, state, action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id] : action.review});
        default: 
            return state;
    }
}

export default reviewReducer;