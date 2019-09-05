import React from 'react'
import { connect } from 'react-redux'
import SongForm from './song_form';
import { update, fetchSong } from '../../actions/song_actions'

const msp = (state, ownProps) => {
    let song = state.entities.songs[ownProps.match.params.songId]
    return ({
        song: song,
        formType: "Update song",
        errors: state.errors.upload
    })
}

const mdp = dispatch => {
    return ({
        fetchSong: id => dispatch(fetchSong(id)),
        processSong: (song) => dispatch(update(song)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

class EditSongForm extends React.Component{

    componentDidMount(){
        let songId = this.props.match.params.songId
        this.props.fetchSong(songId)
    }

    render(){
        let { song, formType, processSong } = this.props
        return (
            <SongForm song={song}
                    formType={formType}
                    processSong={processSong}/>
        )
    }
}

export default connect(msp, mdp)(EditSongForm);