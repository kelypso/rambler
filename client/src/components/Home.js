import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <span className="navLinks">
                <NavLink exact activeClassName="active" to="/signup" className="nav">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav">Login</NavLink>
            </span>
            <br/ >
            <h2><strong>Welcome to Rambler</strong></h2>
        </div>
    )
}

export default Home