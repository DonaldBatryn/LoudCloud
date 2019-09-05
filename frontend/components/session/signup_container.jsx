import React from 'react';
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { createNewUser, clearErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'


const msp = (state, ownProps) => {
    return ({
        session: state.errors.session,
        formType: "Sign Up"
    })
}

const mdp = (dispatch, ownProps) => {

    return ({
        processForm: user => dispatch(createNewUser(user)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button className="submit" onClick={() => dispatch(openModal("Login"))}>
                Login Form
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(SessionForm)