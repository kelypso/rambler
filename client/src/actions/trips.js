// Synchronous action creators 
export const setUserTrips = trips => {
    return {
        type: "SET_USER_TRIPS",
        trips
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