import { connect } from "react-redux"

export const fetchBenches = data => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        data,
        error: (err) => console.log(err)
    })
)

export const createBench = bench => (
    $.ajax({
        method: 'POST',
        url: 'api/benches',
        data: { bench },
    })
)

export const fetchBench = id => (
    $.ajax({
        method: 'GET',
        url: `api/benches/${id}`,
    })
)