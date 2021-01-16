import usersReducer from './users_reducer';
import benchesReducer from './benches_reducer';
import reviewReducer from './reviews_reducer';
import { combineReducers } from 'redux';


const entitiesReducer = combineReducers(
    {
        users: usersReducer,
        benches: benchesReducer,
        reviews: reviewReducer
    }
)

export default entitiesReducer;