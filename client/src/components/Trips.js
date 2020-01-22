import React from 'react'
import {connect} from 'react-redux'
import TripCard from './TripCard.js'

const Trips = ({trips}) => {
    const tripCards = trips.map(t => <TripCard trip={t} key={t.id} />)
    return (
        tripCards.length > 0 ? tripCards : null 
    )
}

const mapStateToProps = ({trips}) => {
    return {
      trips
    }
}

export default connect(mapStateToProps)(Trips)