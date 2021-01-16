import * as APIUtil from '../util/bench_api_util';
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench
});

export const fetchBenches = (data) => (dispatch, getState) => {
    // const data = getState().ui.filters;
    return APIUtil.fetchBenches(data).then(benches => dispatch(receiveBenches(benches)))
}

export const createBench = (data) => (dispatch) => 
    APIUtil.createBench(data)
        .then(bench => dispatch(receiveBench(bench)))

export const fetchBench = id => (dispatch) => 
    APIUtil.fetchBench(id)
        .then(bench => dispatch(recieveBench(bench)))