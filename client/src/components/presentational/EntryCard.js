import React from 'react'
import {Link} from 'react-router-dom'

const EntryCard = ({entry}) => {
    return (
        entry ?
            <div className="EntryCard">
                <h3><Link className="entryDate" to={`/entries/${entry.id}`} key={entry.id}>{trip.attributes.entry.date}</Link></h3>
                <p className="tripCategory">{trip.attributes.category}</p>
                <p className="tripDuration">{trip.attributes.duration}</p>
                <Link to={`/trips/${trip.id}/edit`} className="nav userLink">Edit</Link>
            </div> :
        <p>Entry could not be found</p>
    )
}

export default EntryCard