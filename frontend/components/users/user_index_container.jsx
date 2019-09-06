import { connect } from 'react-redux'
import UserIndex from './user_index'
import { fetchUsers } from '../../actions/user_actions'

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id]
        
        
    })
}

const mdp = dispatch => ({
  
    fetchUsers: () => dispatch(fetchUsers())
 
})

export default connect(msp, mdp)(UserIndex)