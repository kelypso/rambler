import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({user, loggedIn}) => {
    return (
        <div className="NavBar">
            {user ? <strong>Welcome, {user.attributes.name}</strong> : <strong>Welcome to Rambler</strong>}
            <span className="navLinks">
                <NavLink exact activeClass to="/trips">  |  Trips  |  </NavLink>
                <NavLink exact activeClass to="/trips/new">New Trip  |  </NavLink>
            </span>
            <span className="logout">{loggedIn ? <Logout /> : null}</span>
            
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