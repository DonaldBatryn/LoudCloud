
import { connect } from 'react-redux'
import EditPlaylistForm from './new_playlist_form'
import { updatePlaylist } from '../../actions/playlist_actions'

const msp = (state, ownProps) => {
    let userId = state.session.id
    let playlist = state.entities.playlists[ownProps.match.params.playlistId]
    return ({
        playlist: playlist,
        errors: state.errors.playlist,
        formType: "Update Playlist"
    })
}

const mdp = dispatch => {
    return ({
        action: playlist => dispatch(updatePlaylist(playlist))
    })
}

export default connect(msp, mdp)(EditPlaylistForm);