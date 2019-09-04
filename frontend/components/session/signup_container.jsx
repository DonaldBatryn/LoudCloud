
import { connect } from 'react-redux'
import SessionForm from './session_form'
import { createNewUser } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    return ({
        session: state.errors.session,
        formType: "Sign Up"
    })
}

const mdp = (dispatch, ownProps) => {

    return ({
        processForm: user => dispatch(createNewUser(user))
    })
}

export default connect(msp, mdp)(SessionForm)