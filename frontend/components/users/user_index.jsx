import React from 'react'
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        console.log(this.props)
        this.props.fetchUsers()
    }

    render(){
        let userIds = Object.keys(this.props.users)
        console.log(userIds)
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