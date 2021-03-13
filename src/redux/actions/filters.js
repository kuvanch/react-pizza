const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order}
})

const setCategory= (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})

export {
    setSortBy,
    setCategory
}