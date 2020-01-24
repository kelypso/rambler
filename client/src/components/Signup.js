import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/user.js'

const Signup = ({signupData, updateSignupForm, signup, history}) => {
    const {name, email, username, password} = signupData

    const handleChange = e => {
        const {name, value} = e.target
        updateSignupForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={name} placeholder="name" /><br />
            <input type="text" name="email" onChange={handleChange} value={email} placeholder="email" /><br />
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="username" /><br />
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="password" /><br />
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