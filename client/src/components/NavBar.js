import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({user, loggedIn}) => {
    return (
        <div className="NavBar">
            {user ? <strong>Welcome, {user.attributes.name}</strong> : <strong>Welcome to Rambler</strong>}
            <NavLink to="/trips">Trips</NavLink>
            <NavLink to="/trips/new">New Trip</NavLink>
            {loggedIn ? <Logout /> : null}
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user,
      loggedIn: !!user
    }
}

export default connect(mapStateToProps)(NavBar)