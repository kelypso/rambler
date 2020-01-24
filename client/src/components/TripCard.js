import React from 'react'
import {Link} from 'react-router-dom'

const TripCard = ({trip}) => {
    return (
        trip ?
            <div className="TripCard">
                <h2><Link className="tripName" to={`/trips/${trip.id}`} key={trip.id}>{trip.attributes.name}</Link></h2>
                <p className="tripCategory">{trip.attributes.category}</p>
                <p className="tripDuration">{trip.attributes.duration}</p>
                <Link to={`/trips/${trip.id}/edit`} className="nav userLink">Edit</Link>
            </div> :
        <p>Trip could not be found</p>
    )
}

export default TripCard