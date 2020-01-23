import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <span className="navLinks">
                <NavLink exact activeClassName="active" to="/signup">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/login">Login</NavLink>
            </span>
            <br/ >
            <h2><strong>Welcome to Rambler</strong></h2>
        </div>
    )
}

export default Home