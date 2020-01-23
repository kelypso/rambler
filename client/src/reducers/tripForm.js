const initialState = {
    name: "",
    category: "",
    duration: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_TRIP_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_TRIP_FORM":
            return initialState
        default: 
            return state
    }
}