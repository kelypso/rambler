import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/user.js'

const Signup = ({signupData, updateSignupForm, signup}) => {

    const handleChange = e => {
        const {name, value} = e.target
        const updatedForm = {
            ...signupData,
            [name]: value
        }
        updateSignupForm(updatedForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={signupData.name} placeholder="name" />
            <input type="text" name="email" onChange={handleChange} value={signupData.email} placeholder="email" />
            <input type="text" name="username" onChange={handleChange} value={signupData.username} placeholder="username" />
            <input type="text" name="password" onChange={handleChange} value={signupData.password} placeholder="password" />
            <input type="submit" value="Sign Up" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)