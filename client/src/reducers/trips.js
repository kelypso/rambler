export default (state=[], action) => {
    switch (action.type) {
        case "SET_USER_TRIPS":
            return action.trips
        default:
            return state
    }
}