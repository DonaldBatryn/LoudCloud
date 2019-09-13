import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class UserSnippet extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let { user } = this.props;
        let pluralize = user.playlists.length === 1 ? "Playlist" : "Playlists"
        return (
            <Link className="user-link" to={`/users/${user.id}`} ><div className="user-snip">
                <img className="user-thumb" src={user.image_url} alt={user.username} />
                <h4 className="name">{user.username}</h4>
                <h6 className="num-playlists">{user.playlists.length} {pluralize}</h6>
            </div></Link>
        )
    }
}

export default UserSnippet;