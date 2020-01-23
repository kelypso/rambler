// Synchronous action creators 
export const updateNewTripForm = formData => {
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData
    }
}
 
export const resetNewTripForm = () => {
    return {
        type: "RESET_NEW_TRIP_FORM"
    }
}