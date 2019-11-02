import { connect } from 'react-redux';
import { play } from '../../actions/user_actions'
import { fetchSongs, pause, unpause } from '../../actions/song_actions'
import CatagoryIndex from './catagory_index';
import { fetchPlaylists } from '../../actions/playlist_actions'


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
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
        isPaused: state.ui.paused,
        currentSong: state.ui.currentSong,
        loopOn: state.ui.loopOn
    })
}

const mdp = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchSongs: () => dispatch(fetchSongs()),
        play: (song) => dispatch(play(song)),
        pause: () => dispatch(pause()),
        unpause: () => dispatch(unpause())
    })
}

export default connect(msp, mdp)(CatagoryIndex);