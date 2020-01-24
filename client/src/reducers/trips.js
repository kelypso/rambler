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
            return state.map(t => t.id === action.trip.id ? action.trip : t)
        default:
            return state
    }
}