import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import NavBarContainer from './navbar/navbar_container'
import UserIndexContainer from './users/user_index_container'
import PlaylistIndexContainer from './playlists/playlist_index_container'
import SplashContainer from './splash/splash_container'
import PlayBarContainer from './playbar/playbar_container'
import Modal from './modal/modal'
import CatagoryIndexContainer from './catagories/catagory_index';
import UserShowContainer from './users/user_show_container'
import PlaylistShowContainer from './playlists/playlist_show_container'

const App = () => {
   
    return (
        <div className="main-body">
            <Modal />
            <Route path="/" component={NavBarContainer} />
            <AuthRoute path="/" component={SplashContainer} />
            <Route exact path="/" component={CatagoryIndexContainer}/>
            <ProtectedRoute path="/" component={UserIndexContainer}/>
            <Route exact path="/playlists" component={PlaylistIndexContainer}/>
            <Route path="/playlists/:playlistId" component={PlaylistShowContainer} />
            <Route path="/users/:userId" component={UserShowContainer}/>
            <Route path="/" component={PlayBarContainer} />
        </div>
    )
}

export default App;