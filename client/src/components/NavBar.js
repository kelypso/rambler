import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({user, loggedIn}) => {
    return (
        <div className="NavBar">
            <span className="navLinks">
                <NavLink exact activeClassName="active" to="/trips">Trips</NavLink>
                <NavLink exact activeClassName="active" to="/trips/new">New Trip</NavLink>
                <span className="logout"><Logout /></span>
            </span>
            <br/ >
            <h2><strong>Welcome, {user.attributes.name}</strong></h2>
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