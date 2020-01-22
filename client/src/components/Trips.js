import React from 'react'
import {connect} from 'react-redux'
import TripCard from './TripCard.js'

const Trips = ({trips}) => {
    const tripCards = trips.length > 0 ? trips.map(t => <TripCard trip={t} key={t.id} />) : null
    return (
        tripCards
    )
}

const mapStateToProps = ({trips}) => {
    return {
      trips
    }
}

export default connect(mapStateToProps)(Trips)