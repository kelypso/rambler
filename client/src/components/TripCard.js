import React from 'react'
import {Link} from 'react-router-dom'

const TripCard = ({trip}) => {
    return (
        trip ?
            <div className="TripCard">
                <h2><Link to={`/trips/${trip.id}`} key={trip.id}>{trip.attributes.name}</Link></h2>
                <p>{trip.attributes.category}</p>
                <p>{trip.attributes.duration}</p>
            </div> :
        <p>Trip could not be found</p>
    )
}

export default TripCard