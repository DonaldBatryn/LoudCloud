import React from 'react'
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    return ({
        session: state.errors.session,
        formType: "Login"
    })
}

const mdp = (dispatch, ownProps) => {

    return ({
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button className="submit" onClick={() => dispatch(openModal('Sign up'))}>
                Signup Form
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(SessionForm)