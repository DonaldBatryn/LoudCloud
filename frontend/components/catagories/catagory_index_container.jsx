import React from 'react';
import { connect } from 'react-redux';

import { fetchSongs, pause, unpause } from '../../actions/song_actions'
import CatagoryIndex from './catagory_index';


const msp = state => {
    let currentUserId = state.session.id
    let userPlaylists = {};
    Object.keys(state.entities.playlists).forEach(id => {
        let playlist = state.entities.playlists[id]
        if (playlist.user_id === currentUserId) {
            userPlaylists[playlist.id] = playlist
        }
    })

    return ({
        playlists: userPlaylists,
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    })
}

const mdp = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        pause: () => dispatch(pause()),
        unpause: () => dispatch(unpause())
    })
}

export default connect(msp, mdp)(CatagoryIndex);