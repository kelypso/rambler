import React from 'react'
import {connect} from 'react-redux'
import {updateTripForm} from '../actions/tripForm.js'

const TripForm = ({tripData, userId, updateTripForm, handleSubmit, editMode}) => {
    const {name, category, duration} = tripData

    const handleChange = e => {
        const {name, value} = e.target
        updateTripForm(name, value)
    }

    return (
        <div className="TripForm">
            <form onSubmit={e => {
                e.preventDefault()
                handleSubmit(tripData)
            }}>
            <input type="text" name="name" onChange={handleChange} value={name} placeholder="name" className="formInput" /><br/><br/>
            <input type="text" name="category" onChange={handleChange} value={category} placeholder="category" className="formInput" /><br/><br/>
            <input type="text" name="duration" onChange={handleChange} value={duration} placeholder="start date - end date" className="formInput" /><br/>
            <br/><input type="submit" value={editMode ? "Edit Trip" : "Add Trip"} className="formBtn" />
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