import { connect } from 'react-redux'
import PlaylistShow from './playlist_show'
import { fetchPlaylists } from '../../actions/playlist_actions'
import { fetchSongs } from '../../actions/song_actions'
import { fetchUsers } from '../../actions/user_actions'

const msp = (state, ownProps) => {
    let playlistId = parseInt(ownProps.match.params.playlistId)
    let playlist = state.entities.playlists[playlistId]
    let songs = state.entities.songs
    let users = state.entities.users
 
    return ({
        playlist,
        songs,
        users
    })
}

const mdp = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchSongs: () => dispatch(fetchSongs()),
        fetchUsers: () => dispatch(fetchUsers())
    })
}

export default connect(msp, mdp)(PlaylistShow)