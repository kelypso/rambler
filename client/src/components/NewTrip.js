import React from 'react'
import {connect} from 'react-redux'
import {updateNewTripForm} from '../actions/newTripForm.js'
// import {addTrip} from '../actions/user.js'

const NewTrip = ({tripData, updateNewTripForm, addTrip, history}) => {

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        updateNewTripForm(name, value)
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     addTrip(tripData, history)
    // }

    return (
        <div className="NewTrip">
            <form>
                <input type="text" name="name" onChange={handleChange} placeholder="name" /><br />
                <input type="text" name="category" onChange={handleChange} placeholder="category" /><br />
                <input type="text" name="duration" onChange={handleChange} placeholder="start date - end date" /><br />
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

export default connect(null, {updateNewTripForm})(NewTrip)