import React from 'react';
import UserSnippet from './user_snippet'

const UserIndexItem = props => {
    

    let userSnips = props.users.map(user => {
        return <UserSnippet key={user.id} user={user} />
    })

    return (
        <div className="user-index-item">
            <div className="group-text">
                <h2 className="user-header">{props.item}</h2>
            </div>
            <span className="line"></span>
            <div className="snippets">
                {userSnips}
            </div>
        </div>
    )
 
}

export default UserIndexItem;