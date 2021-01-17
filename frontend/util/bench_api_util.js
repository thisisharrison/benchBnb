export const fetchBenches = data => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        data,
        error: (err) => console.log(err)
    })
)

export const createBench = formData => (
    $.ajax({
        method: 'POST',
        url: 'api/benches',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const fetchBench = id => (
    $.ajax({
        method: 'GET',
        url: `api/benches/${id}`,
    })
)

export const postReview = review => (
    $.ajax({
        method: 'POST',
        url: `api/reviews`,
        data: {review}
    })
)