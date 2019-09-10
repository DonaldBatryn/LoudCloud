import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { fetchPlaylists } from '../../actions/playlist_actions'
import { fetchSongs } from '../../actions/song_actions'

const msp = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId]
   
    return ({
        currentUser: state.session.id,
        user: user
    })
}

const mdp = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchSongs: () => dispatch(fetchSongs())
    })
}

export default connect(msp, mdp)(UserShow);