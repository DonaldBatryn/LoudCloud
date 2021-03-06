import React from 'react';
import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions'


const msp = state => {
    let currentUserId = state.session.id
    let userPlaylists = {};
    Object.keys(state.entities.playlists).forEach(id => {
        let playlist = state.entities.playlists[id]
        if (playlist.user_id === currentUserId){
            userPlaylists[playlist.id] = playlist
        }
    })
   
    return ({
        playlists: userPlaylists,
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
        paused: state.ui.paused,
        currentSong: state.ui.currentSong
    })
}

const mdp = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        pause: () => dispatch(pause()),
        unpause: () => dispatch(unpause()),
        play: song => dispatch(play(song))
    })
}

export default connect(msp, mdp)(SongIndex);