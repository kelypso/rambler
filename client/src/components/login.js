import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'

const Login = ({loginForm, updateLoginForm}) => {

    const handleChange = e => {
        const {name, value} = e.target
        const updatedForm = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedForm)
    }

    return (
        <form onSubmit={undefined}>
            <input type="text" name="username" onChange={handleChange} value={loginForm.username} placeholder="username" /><br />
            <input type="text" name="password" onChange={handleChange} value={loginForm.password} placeholder="password" /><br />
            <input type="submit" value="Login" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)