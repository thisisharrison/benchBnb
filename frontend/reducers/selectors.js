export const benchArray = ({ entities: { benches } }) => (
    Object.keys(benches).map(key => benches[key])
)

export const getMinSeating = ({ ui: {filters: { minSeating }}}) => (
    minSeating
)

export const getMaxSeating = ({ ui: { filters: { maxSeating } }}) => (
    maxSeating
)

export const selectBench = ({entities: {benches}}, benchId) => (
    benches[benchId]
)

export const selectReviewsForBench = ({benches, reviews}, bench) => {
    return bench.reviewIds.map(reviewId => reviews[reviewId])
}