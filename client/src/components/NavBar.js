import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({user}) => {
    return (
        <div className="NavBar">
            {user ? <strong>Welcome, {user.name}</strong> : <strong>Welcome to Rambler</strong>}
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