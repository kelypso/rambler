// Synchronous action creators 
export const updateTripForm = (name, value) => {
    return {
        type: "UPDATE_TRIP_FORM",
        formData: {name, value}
    }
}
 
export const resetTripForm = () => {
    return {
        type: "RESET_TRIP_FORM"
    }
}