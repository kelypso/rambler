import React from 'react'
import {connect} from 'react-redux'
import {updateTripForm} from '../actions/tripForm.js'

const TripForm = ({tripData, userId, updateTripForm, handleSubmit, history, editMode}) => {
    const {name, category, duration} = tripData

    const handleChange = e => {
        const {name, value} = e.target
        updateTripForm(name, value)
    }

    return (
        <div className="TripForm">
            <form onSubmit={e => {
                e.preventDefault()
                handleSubmit(tripData, userId, history)
            }}>
                <input type="text" name="name" onChange={handleChange} value={name} placeholder="name" /><br />
                <input type="text" name="category" onChange={handleChange} value={category} placeholder="category" /><br />
                <input type="text" name="duration" onChange={handleChange} value={duration} placeholder="start date - end date" /><br />
            <input type="submit" value={editMode ? "Edit Trip" : "Add Trip"} />
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

export default connect(mapStateToProps, {updateTripForm})(TripForm)