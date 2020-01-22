import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {login} from '../actions/user.js'

const Login = ({loginData, updateLoginForm, login}) => {

    const handleChange = e => {
        const {name, value} = e.target
        const updatedForm = {
            ...loginData,
            [name]: value
        }
        updateLoginForm(updatedForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} value={loginData.username} placeholder="username" /><br />
            <input type="text" name="password" onChange={handleChange} value={loginData.password} placeholder="password" /><br />
            <input type="submit" value="Login" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)