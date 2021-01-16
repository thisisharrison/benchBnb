export const benchArray = ({ entities: { benches } }) => (
    Object.keys(benches).map(key => benches[key])
)

export const getMinSeating = ({ ui: {filters: { minSeating }}}) => (
    minSeating
)

export const getMaxSeating = ({ ui: { filters: { maxSeating } }}) => (
    maxSeating
)