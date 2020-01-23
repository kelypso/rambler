import {resetTripForm} from './tripForm.js'

// Synchronous action creators 
export const setUserTrips = trips => {
    return {
        type: "SET_USER_TRIPS",
        trips
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

// Asynch action creators
export const getUserTrips = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/trips", {
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
                dispatch(setUserTrips(response.data))
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