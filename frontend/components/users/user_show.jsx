import React from 'react'
import { formatDate } from '../../utils/date_util'

class UserShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: {},
            user: ""
        }
    }
    componentDidMount(){
       
    }

    render(){
        let { username, created_at, songs } = this.props.user
        return (
            <div className="main-user-show">
                <div className="user-box">
                    <div className="user-info">
                        <img className="show-thumb" src="/assets/cloud.png" />
                        <div className="deets">
                            <h2>{username}</h2>
                            <h3>Member Since:&nbsp;{formatDate(created_at)}</h3>
                            <h4>{songs}Tracks</h4>
                            <h4>Num Followers</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserShow;