const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_USER_TRIPS":
            return action.trips
        case "ADD_TRIP":
            return state.concat(action.trip)
        case "CLEAR_TRIPS":
            return initialState
        case "UPDATE_TRIP":
            console.log("UPDATE trip action is:", action)
            return state
        default:
            return state
    }
}