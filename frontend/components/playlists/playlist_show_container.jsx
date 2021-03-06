import { connect } from 'react-redux'
import  {withRouter}  from 'react-router'
import PlaylistShow from './playlist_show'
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions'
import { fetchSongs, pause } from '../../actions/song_actions'
import { fetchUsers, play } from '../../actions/user_actions'

const msp = (state, ownProps) => {
    let playlistId = parseInt(ownProps.match.params.playlistId)
    let playlist = state.entities.playlists[playlistId]
    let songs = state.entities.songs
    let users = state.entities.users

    return ({
        currentUser: state.session.id,
        playlist,
        songs,
        users,
        currentSong: state.ui.currentSong,
        paused: state.ui.paused
    })
}

const mdp = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        fetchSongs: () => dispatch(fetchSongs()),
        fetchUsers: () => dispatch(fetchUsers()),
        play: song => dispatch(play(song)),
        pause: () => dispatch(pause())
    })
}

export default withRouter(connect(msp, mdp)(PlaylistShow))