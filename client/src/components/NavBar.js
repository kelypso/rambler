import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({user}) => {
    return (
        <div className="nav">
            {user ? <h2>Welcome, {user.name}</h2> : <h2>Welcome to Rambler</h2>}
            {user ? <Logout /> : <Login />}
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user
    }
}

export default connect(mapStateToProps)(NavBar)