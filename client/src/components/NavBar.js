import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout.js';

const NavBar = ({user}) => {
    return (
        <div className="NavBar">
            {user ? <strong>Welcome, {user.attributes.name}</strong> : <strong>Welcome to Rambler</strong>}
            <Logout />
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user
    }
}

export default connect(mapStateToProps)(NavBar)