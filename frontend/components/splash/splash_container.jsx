import { connect } from 'react-redux'
import Splash from './splash'
import { openModal } from '../../actions/modal_actions'

const mdp = dispatch => {
    return ({
        openModal: type => dispatch(openModal(type))
    })
}

export default connect(null, mdp)(Splash)