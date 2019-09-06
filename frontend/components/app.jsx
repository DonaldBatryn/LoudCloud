import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import NavBarContainer from './navbar/navbar_container'
import UserIndex from './users/user_index'
import SplashContainer from './splash/splash_container'
import PlayBarContainer from './playbar/playbar_container'
import Modal from './modal/modal'
import CatagoryIndex from './catagories/catagory_index';

const App = () => {
    return (
        <div className="main-body">
            <Modal />
            <Route path="/" component={NavBarContainer} />
            <AuthRoute path="/" component={SplashContainer} />
            <ProtectedRoute path="/" component={CatagoryIndex}/>
            <ProtectedRoute path="/" component={UserIndex}/>
            <Route path="/" component={PlayBarContainer} />
        </div>
    )
}

export default App;