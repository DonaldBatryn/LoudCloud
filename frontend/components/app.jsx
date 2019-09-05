import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import NavBarContainer from './navbar/navbar_container'

import SplashContainer from './splash/splash_container'
import PlayBarContainer from './playbar/playbar_container'
import Modal from './modal/modal'

const App = () => {
    return (
        <div>
            <Modal />
            <Route path="/" component={NavBarContainer} />
            <Route path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={Modal}/>
            <AuthRoute path="/login" component={Modal}/>
            <Route path="/" component={PlayBarContainer} />
        </div>
    )
}

export default App;