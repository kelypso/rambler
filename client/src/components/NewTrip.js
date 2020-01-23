import React from 'react'
import {connect} from 'react-redux'
//import {updateTripForm} from '../actions/newTripForm.js'
// import {addTrip} from '../actions/user.js'

const NewTrip = ({tripData, updateTripForm, addTrip, history}) => {

    const handleChange = () => {
        // const {name, value} = e.target
        // const updatedForm = {
        //     ...tripData,
        //     [name]: value
        // }
        // updateTripForm(updatedForm)
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     addTrip(tripData, history)
    // }

    return (
        <div className="NewTrip">
            <form>
                <input type="text" name="name" onChange={handleChange} value={tripData.name} placeholder="name" /><br />
                <input type="text" name="category" onChange={handleChange} value={tripData.category} placeholder="category" /><br />
                <input type="text" name="duration" onChange={handleChange} value={tripData.duration} placeholder="start date - end date" /><br />
            <input type="submit" value="Add Trip" />
        </form>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         tripData: state.tripForm
//     }
// }

export default NewTrip