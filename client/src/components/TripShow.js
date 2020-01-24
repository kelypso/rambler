import React from 'react'

const TripShow = ({trip}) => {
    return (
        trip ?
            <div className="TripShow">
                <h2>{trip.attributes.name}</h2>
                <p className="tripCategory">{trip.attributes.category}</p>
                <p className="tripDuration">{trip.attributes.duration}</p>
            </div> :
        <p>Trip could not be found</p>
    )
}

export default TripShow