import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/user.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Trips from './components/Trips.js'
import MainContainer from './components/MainContainer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const {loggedIn} = this.props
    return (
      <Router>
        <div className="App">
          <NavBar />
          <MainContainer />
          <Route exact path='/' render={() => loggedIn? <Trips /> : <Home />} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/trips' component={Trips} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.user
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App)
