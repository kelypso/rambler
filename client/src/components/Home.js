import React from 'react'
import Login from './Login.js'
import Logout from './Logout.js'
import {Link} from 'react-router-dom'

const Home = () => (
    <div className="Home">
        <Link to="/signup">Sign Up</Link> | <Link to="login">Login</Link>
    </div>
)

export default Home