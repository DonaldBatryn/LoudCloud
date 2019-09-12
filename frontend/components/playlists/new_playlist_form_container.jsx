import { connect } from 'react-redux'
import NewPlaylistForm from './new_playlist_form'
import { createPlaylist } from '../../actions/playlist_actions'

const msp = state => {
    let userId = state.session.id
    return ({
        playlist: {
            title: "",
            user_id: userId,
            image: ""
        },
        errors: state.errors.playlist,
        formType: "Create Playlist",
        currentUser: state.session.id
    })
}

const mdp = dispatch => {
    return ({
        action: playlist => dispatch(createPlaylist(playlist))
    })
}

export default connect(msp, mdp)(NewPlaylistForm);