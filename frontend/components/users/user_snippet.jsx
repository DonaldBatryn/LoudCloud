import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class UserSnippet extends React.Component{
    constructor(props){
        super(props)
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow(e){
        e.preventDefault();
        <Redirect to={`/users/${this.props.user.id}`} />
        // onClick = { this.handleShow }
    }

    render(){
        let pluralize = this.props.user.songs.length === 1 ? "Playlist" : "Playlists"
        return (
            <Link className="user-link" to={`/users/${this.props.user.id}`} ><div className="user-snip">
                <img className="user-thumb" src={window.cloud} alt={this.props.user.username} />
                <h4 className="name">{this.props.user.username}</h4>
                <h6 className="num-playlists">{this.props.user.playlists.length} {pluralize}</h6>
            </div></Link>
        )
    }
}

export default UserSnippet;