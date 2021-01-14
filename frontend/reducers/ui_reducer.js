import filterReducer from './filter_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers(
    {
        filters: filterReducer
    }
);

export default uiReducer;