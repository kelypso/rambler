import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/user.js';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      this.props.user ? <Logout /> : <Login />
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App)
