import React from 'react'

const TripShow = ({trip}) => {
    return (
        trip ?
            <div className="TripShow">
                <h2>{trip.attributes.name}</h2>
                <p className="showDuration">{trip.attributes.duration}</p>
                <p className="showCategory">{trip.attributes.category}</p>
            </div> :
        <p>Trip could not be found</p>
    )
}

export default TripShow