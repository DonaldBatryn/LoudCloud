import React from 'react'
import { connect } from 'react-redux'
import SongForm from './song_form';
import { closeModal } from '../../actions/modal_actions'
import { upload, clearErrs } from '../../actions/song_actions'

const msp = state => {
    return ({
        song: {
            title: "",
            album_name: "",
            artist: "",
            description: "",
            songUrl: "",
            user_id: state.session.id
        },
        formType: "Upload song",
        errors: state.errors.upload
    })
}

const mdp = dispatch => {
    return ({
        processSong: (song) => dispatch(upload(song)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrs())
    })
}

export default connect(msp, mdp)(SongForm);