import { connect } from 'react-redux'
import PlaylistIndex from './playlist_index'
import { fetchPlaylists } from '../../actions/playlist_actions'

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        // playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id])


    })
}

const mdp = dispatch => ({

    fetchPlaylists: () => dispatch(fetchPlaylists())

})

export default connect(msp, mdp)(PlaylistIndex)