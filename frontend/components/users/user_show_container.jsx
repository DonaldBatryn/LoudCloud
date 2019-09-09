import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchUser, fetchUsers } from '../../actions/user_actions'

const msp = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId]
   
    return ({
        user: user
    })
}

const mdp = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (id) => dispatch(fetchUser(id))
    })
}

export default connect(msp, mdp)(UserShow);