import React from 'react'
import {connect} from 'react-redux'
import {updateTripForm} from '../actions/tripForm.js'
import {createTrip} from '../actions/trips.js'

const TripForm = ({tripData, userId, updateTripForm, createTrip, history}) => {
    const {name, category, duration} = tripData

    const handleChange = e => {
        const {name, value} = e.target
        updateTripForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        createTrip({
            ...tripData, 
            userId
        }, history)
    }

    return (
        <div className="TripForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={name} placeholder="name" /><br />
                <input type="text" name="category" onChange={handleChange} value={category} placeholder="category" /><br />
                <input type="text" name="duration" onChange={handleChange} value={duration} placeholder="start date - end date" /><br />
            <input type="submit" value="Add Trip" />
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    const userId = state.user ? state.user.id : ""
    return {
        tripData: state.tripForm,
        userId
    }
}

export default connect(mapStateToProps, {updateTripForm, createTrip})(TripForm)