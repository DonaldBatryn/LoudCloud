import React from 'react';
import { connect } from 'react-redux';
import SongIndex from './song_index';


const msp = state => {
    return ({
        songs: state.entities.songs
    })
}

const mdp = dispatch => {
    return ({

    })
}

export default connect(msp, mdp)(SongIndex);