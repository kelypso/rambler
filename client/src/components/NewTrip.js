import React from 'react'
import {connect} from 'react-redux'
import {updateNewTripForm} from '../actions/newTripForm.js'
import {createTrip} from '../actions/trips.js'

const NewTrip = ({tripData, userId, updateNewTripForm, createTrip, history}) => {
    const {name, category, duration} = tripData

    const handleChange = e => {
        const {name, value} = e.target
        updateNewTripForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        createTrip({
            ...tripData, 
            userId
        })
    }

    return (
        <div className="NewTrip">
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
        tripData: state.newTripForm,
        userId
    }
}

export default connect(mapStateToProps, {updateNewTripForm, createTrip})(NewTrip)