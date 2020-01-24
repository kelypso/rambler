import {resetEntryForm} from './entryForm.js'

// Synchronous action creators 
export const setUserEntries = entries => {
    return {
        type: "SET_USER_ENTRIES",
        entries
    }
}

export const clearTrips = () => {
    return {
        type: "CLEAR_TRIPS"
    }
}

export const addTrip = trip => {
    return {
        type: "ADD_TRIP",
        trip
    }
}

export const updateTripStore = trip => {
    return {
        type: "UPDATE_TRIP",
        trip
    }
}

export const deleteTripStore = tripId => {
    return {
        type: "DELETE_TRIP",
        tripId
    }
}

// Asynch action creators
export const getUserEntries = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/entries", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setUserEntries(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createTrip = (tripData, history) => {
    return dispatch => {
        const tripBody = {
            trip: {
                name: tripData.name,
                category: tripData.category,
                duration: tripData.duration,
                user_id: tripData.userId
            }
        }
        return fetch("http://localhost:3001/api/v1/trips", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripBody)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(addTrip(response.data))
                    dispatch(resetTripForm())
                    history.push(`/trips/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const updateTrip = (tripData, history) => {
    return dispatch => {
        const tripBody = {
            trip: {
                name: tripData.name,
                category: tripData.category,
                duration: tripData.duration
            }
        }
        return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripBody)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(updateTripStore(response.data))
                    history.push(`/trips/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}

export const deleteTrip = (tripId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/trips/${tripId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                dispatch(deleteTripStore(tripId))
                history.push("/trips")
            }
        })
            .catch(console.log)
    }   
}