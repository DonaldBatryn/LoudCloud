import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import LoginFormContainer from './session/login_container'
import SignupFormContainer from './session/signup_container'

const App = () => {
    return (
        <div>
            <h1>LOUDCLOUD</h1>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            {/* <Route exact path="/" component={} /> */}
        </div>
    )
}

export default App;