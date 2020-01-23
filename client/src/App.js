import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/user.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Trips from './components/Trips.js'
import NewTrip from './components/NewTrip.js'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const {loggedIn} = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : <Home />}
        {/* <Route exact path='/' render={() => loggedIn? <Trips /> : <Home />} /> */}
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/trips' component={Trips} />
          <Route exact path='/trips/new' component={NewTrip} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.user
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
