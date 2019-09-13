import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { fetchPlaylists, deletePlaylist, updatePlaylist } from '../../actions/playlist_actions'
import { fetchSongs } from '../../actions/song_actions'

const msp = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId]
   
    return ({
        currentUser: state.session.id,
        playlists: state.entities.playlists,
        user: user
    })
}

const mdp = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchSongs: () => dispatch(fetchSongs()),
        deletePlaylist: (id) => dispatch(deletePlaylist(id)),
        updatePlaylist: playlist => dispatch(updatePlaylist(playlist))
    })
}

export default connect(msp, mdp)(UserShow);