import React from 'react'
import TripForm from './TripForm.js'
import {updateTrip, deleteTrip} from '../actions/trips.js'
import {setEditTripForm, resetTripForm} from '../actions/tripForm.js'
import {connect} from 'react-redux'

class EditTripFormContainer extends React.Component {

    componentDidMount() {
        this.props.trip && this.props.setEditTripForm(this.props.trip)
    }

    componentDidUpdate(prevProps) {
        this.props.trip && !prevProps.trip && this.props.setEditTripForm(this.props.trip)
    }

    componentWillUnmount() {
        this.props.resetTripForm()
    }

    handleSubmit = (tripData) => {
        const {updateTrip, trip, history} = this.props
        updateTrip({
            ...tripData, 
            tripId: trip.id
        }, history)
    }
    
    render() {
        const {trip, deleteTrip, history} = this.props
        const tripId = trip ? trip.id : null
        return (
            <div className="EditTripFormContainer">
                <br/><br/><TripForm editMode handleSubmit={this.handleSubmit} /><br/>
                <button onClick={() => deleteTrip(tripId, history)} className="formBtn">Delete Trip</button>
                <p className="caution">*Deleting a trip will remove all associated entries*</p> 
                {/* Move button to trip show page??? */}
            </div>
        )
    }
}

export default connect(null, {updateTrip, deleteTrip, setEditTripForm, resetTripForm})(EditTripFormContainer)