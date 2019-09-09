import { connect } from 'react-redux'
import UserIndex from './user_index'
import { fetchUsers } from '../../actions/user_actions'

const msp = state => {
    let users = []
    Object.keys(state.entities.users).forEach(id => {
        if (id !== state.session.id) {
            users.push(state.entities.users[id])
        }
    })
    return ({
        currentUser: state.entities.users[state.session.id],
        users: users
    })
}

const mdp = dispatch => ({
  
    fetchUsers: () => dispatch(fetchUsers())
 
})

export default connect(msp, mdp)(UserIndex)

// Object.keys(state.entities.users).map(id => state.entities.users[id])