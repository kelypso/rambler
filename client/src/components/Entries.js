import React from 'react'
import {connect} from 'react-redux'
import EntryCard from './presentational/EntryCard.js'

const Entries = ({entries}) => {
    const entryCards = entries.length > 0 ? entries.map(en => <EntryCard entry={en} key={en.id} />) : null
    return (
        entryCards
    )
}

const mapStateToProps = ({state}) => {
    return {
      entries = state.trips.attributes.entries
    }
}

export default connect(mapStateToProps)(Entries)