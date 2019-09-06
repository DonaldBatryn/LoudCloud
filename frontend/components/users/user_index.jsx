import React from 'react'
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        let users1 = this.props.users
        debugger
        return (
            <div className="user-main">
                <UserIndexItem users={[]} item={"Who To Follow"}/>
                <UserIndexItem users={[]} item={"Your Followers"}/>
                <UserIndexItem users={[]} item={"Following You"}/>
            </div>
        )
    }
}

export default UserIndex;