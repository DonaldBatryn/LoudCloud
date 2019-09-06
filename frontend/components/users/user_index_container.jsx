import { connect } from 'react-redux'
import UserIndex from './user_index'
import { fetchUsers } from '../../actions/user_actions'

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
        
    })
}

const mdp = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    })
}

export default connect(msp, mdp)(UserIndex)