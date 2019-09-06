import React from 'react';
import UserSnippet from './user_snippet'

class UserIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="user-index-item">
                <div className="group-text">
                    <h2>{this.props.item}</h2>
                </div>
                <span className="line"></span>
                <div className="snippets">
                    <UserSnippet user={this.props.users[0]} />
                    <UserSnippet user={this.props.users[1]}/>
                    <UserSnippet user={this.props.users[2]}/>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;