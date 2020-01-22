import React from 'react'

const TripCard = ({trip}) => {
    return (
        <div className="TripCard">
            <h2>{trip.attributes.name}</h2>
            <p>{trip.attributes.category}</p>
            <p>{trip.attributes.duration}</p>
        </div>
    )
}

export default TripCard