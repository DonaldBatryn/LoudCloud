import React from 'react'
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{


    componentDidMount(){
        this.props.fetchUsers()
        // console.log(this.props.users)
    }
    
    render(){
        // console.log(this.props.users)
        // let users1 = this.props.users.slice(1, 4)
        // let users2 = this.props.users.slice(4, 7)
        // let users3 = this.props.users.slice(7, 9)
        // console.log(users1)
        // console.log(users2)
        // console.log(users3)
        const { users } = this.props
        let first = users.slice(1, 4)
        let second = users.slice(4, 7)
        let third = users.slice(7, 10)
        console.log(first)
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