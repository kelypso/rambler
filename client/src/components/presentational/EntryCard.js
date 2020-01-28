import React from 'react'
import {Link} from 'react-router-dom'

const EntryCard = ({entry}) => {
    return (
        <div className="EntryCard">
            <h3><Link className="entryDate" to={`/entries/${entry.id}`} key={entry.id}>{console.log(entry.attributes.date)}</Link></h3>
            <p className="entryLocation">{entry.attributes.location}</p>
        </div>
    )
}

export default EntryCard