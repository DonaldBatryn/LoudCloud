import React from 'react'
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{


    componentDidMount(){
        this.props.fetchUsers()
       
    }
    
    render(){
        const { users } = this.props
        let otherUsers;
        otherUsers = users.filter(user => {
            return (user.id !== this.props.currentUser.id )&& (user.id !== 1)
        })
       
        let first = otherUsers.slice(0, 3)
        let second = otherUsers.slice(3, 6)
        let third = otherUsers.slice(6, 9)
        return (
            <div className="user-main">
                <UserIndexItem users={ first } item={"Who To Follow"}/>
                <UserIndexItem users={ second } item={"Your Followers"}/>
                <UserIndexItem users={ third } item={"Users You Follow"}/>
            </div>
        )
    }
}

export default UserIndex;