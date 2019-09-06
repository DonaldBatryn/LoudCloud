import { connect } from 'react-redux'
import UserIndex from './user_index'
import { fetchUsers } from '../../actions/user_actions'

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: Object.keys(state.entities.users).map(id => state.entities.users[id])
        
        
    })
}

const mdp = dispatch => ({
  
    fetchUsers: () => dispatch(fetchUsers())
 
})

export default connect(msp, mdp)(UserIndex)

// Object.keys(state.entities.users).map(id => state.entities.users[id])