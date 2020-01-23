import React from 'react'

const TripCard = ({trip}) => {
    return (
        trip ?
            <div className="TripCard">
                <h2>{trip.attributes.name}</h2>
                <p>{trip.attributes.category}</p>
                <p>{trip.attributes.duration}</p>
            </div> :
        <p>Trip card with no trip :(</p>
    )
}

export default TripCard