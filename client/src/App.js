import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/user.js'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Trips from './components/Trips.js'
import TripForm from './components/TripForm.js'
import TripCard from './components/TripCard.js' // Update with trip page???
//import NewTripForm from './components/TripForm.js'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const {loggedIn, trips} = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : <Home />}
        {/* <Route exact path='/' render={() => loggedIn? <Trips /> : <Home />} /> */}
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/trips' component={Trips} />
          <Route exact path='/trips/new' component={TripForm} />
          <Route exact path='/trips/:id' render={props => { // Update with trip page???
              const trip = trips.find(t => t.id === props.match.params.id)
              return <TripCard trip={trip} {...props} />
            }
          } />
          <Route exact path='/trips/:id/edit' render={props => {
              const trip = trips.find(t => t.id === props.match.params.id)
              return <TripForm trip={trip} {...props} /> // NewTripForm
            }
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.user,
    trips: state.trips
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
