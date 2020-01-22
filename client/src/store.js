import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import users from './reducers/users.js'
import user from './reducers/user.js'
import loginForm from './reducers/loginForm.js'
import trips from './reducers/trips.js'

const reducer = combineReducers({
    // users,
    user,
    loginForm,
    trips
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store