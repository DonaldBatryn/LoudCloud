import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import NavBarContainer from './navbar/navbar_container'

import SplashContainer from './splash/splash_container'
import PlayBarContainer from './playbar/playbar_container'
import Modal from './modal/modal'
import CatagoryIndex from './catagories/catagory_index';

const App = () => {
    return (
        <div>
            <Modal />
            <Route path="/" component={NavBarContainer} />
            <Route exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/home" component={CatagoryIndex}/>
            <Route path="/" component={PlayBarContainer} />
        </div>
    )
}

export default App;