import { fetchBenches } from './bench_actions';
export const UPDATE_FILTERS = 'UPDATE_FILTERS'

export const changeFilter = (filter, value) => (
    {
        type: UPDATE_FILTERS,
        filter,
        value
    }
)
// fetchBenches is also a thunk action
// currying: first the action takes data, then returns a function that takes dispatch
export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
}