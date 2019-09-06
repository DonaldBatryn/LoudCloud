import React from 'react'
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{


    componentDidMount(){
        this.props.fetchUsers()
       
    }
    
    render(){
     
        const { users } = this.props
        let first = users.slice(1, 4)
        let second = users.slice(4, 7)
        let third = users.slice(7, 10)
      
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