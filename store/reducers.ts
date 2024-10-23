const initialState = {
    count: 0
}
export default (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            count: state.count + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            count: state.count - 1
        }
    }
    return state
}