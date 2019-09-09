import { connect } from 'react-redux'
import PlaylistIndex from './playlist_index'
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions'
import { fetchUsers } from '../../actions/user_actions'

const msp = state => {
 
    return ({
        currentUser: state.entities.users[state.session.id],
        playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id]),
        users: state.entities.users


    })
}

const mdp = dispatch => ({

    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchUsers: () => dispatch(fetchUsers())

})

export default connect(msp, mdp)(PlaylistIndex)