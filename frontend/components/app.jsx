import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_container'
import SignupFormContainer from './session/signup_container'
import SplashContainer from './splash/splash_container'

const App = () => {
    return (
        <div>
            <Route path="/" component={NavBarContainer} />
            <Route path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            {/* <Route exact path="/" component={} /> */}
        </div>
    )
}

export default App;