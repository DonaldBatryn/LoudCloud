import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_container'
import SignupFormContainer from '../session/signup_container'

function Modal({modal, closeModal}) {
    if (!modal){
        return null;
    }
    let component;
    switch(modal) {
        case 'Login':
            component = <LoginFormContainer/>;
            break;
        case 'Sign up':
            component = <SignupFormContainer/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-screen" onClick={closeModal}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = state => {
    return ({
        modal: state.ui.modal
    })
}

const mdp = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(Modal);