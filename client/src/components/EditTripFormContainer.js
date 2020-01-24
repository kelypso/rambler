import React from 'react'
import TripForm from './TripForm.js'
import {updateTrip} from '../actions/trips.js'
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
        const {history} = this.props
        return (
            <div className="EditTripFormContainer">
                <TripForm editMode handleSubmit={this.handleSubmit} />
                <br/>
                <button style={{color: "maroon"}} onClick={this.deleteTrip}>Delete Trip</button> 
                {/* Move button to trip show page??? */}
            </div>
        )
    }
}

export default connect(null, {updateTrip, setEditTripForm, resetTripForm})(EditTripFormContainer)