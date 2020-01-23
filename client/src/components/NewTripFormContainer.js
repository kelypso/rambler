import React from 'react'
import TripForm from './TripForm.js'
import {createTrip} from '../actions/trips.js'
import {connect} from 'react-redux'

const NewTripFormContainer = ({createTrip, history}) => {

    const handleSubmit = (tripData, userId, history) => {
        createTrip({
            ...tripData, 
            userId
        }, history)
    }
    
    return (
        <div className="NewTripFormContainer">
            <TripForm handleSubmit={handleSubmit} history={history} />
        </div>
    )
}

export default connect(null, {createTrip})(NewTripFormContainer)