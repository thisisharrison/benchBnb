export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
import * as APIUtil from '../util/bench_api_util';

// Matches review json jbuilder format
export const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
    average_rating
});

export const postReview = data => dispatch => (
    APIUtil.postReview(data).then(review => (
        dispatch(receiveReview(review))
    ))
);
