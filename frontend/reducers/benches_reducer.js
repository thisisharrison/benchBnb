import { 
    RECEIVE_BENCHES,
    RECEIVE_BENCH,
} from '../actions/bench_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES: 
            return action.benches;
        case RECEIVE_BENCH:
            const newBench = {[action.bench.id] : action.bench};
            return Object.assign({}, state, newBench);
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const clone = Object.assign({}, state);
            clone[review.bench_id].reviewIds.push(review.id);
            clone[review.bench_id].average_rating = average_rating;
            return clone;
        default: 
            return state;
    }
}

export default benchesReducer;