import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'

const msp = state => {
    return ({
        currentUser: state.session.currentUser
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        openModal: (type) => dispatch(openModal(type))
    })
}

export default connect(msp, mdp)(NavBar)