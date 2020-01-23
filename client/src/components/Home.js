import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <span className="navLinks">
                <Link to="/signup">  |  Sign Up  |  </Link>
                <Link to="/login">  Login  |</Link>
            </span>
            <br/ >
            <h2><strong>Welcome to Rambler</strong></h2>
        </div>
    )
}

export default Home