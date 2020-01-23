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

export const setEditTripForm = trip => {
    const formData = {
        name: trip.attributes.name,
        category: trip.attributes.category,
        duration: trip.attributes.duration
    }
    return {
        type: "SET_EDIT_TRIP_FORM",
        formData
    }
}