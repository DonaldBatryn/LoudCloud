import React from 'react'
import { formatDate } from '../../utils/date_util'
import { Link, Route } from 'react-router-dom';

class PlaylistPreview extends React.Component {

    handleUpdate(e){
        e.stopPropagation();
        <Route to={`/playlists/${this.props.playlist.id/edit}`} />
    }

    render() {
        let deleteButton = "";
       
        if (this.props.currentUser === this.props.playlist.user_id){
            deleteButton = <div><button className="delete-pl-button" onClick={() => this.props.deletePlaylist(this.props.playlist.id)}>Delete</button></div>
            
        }
        return (
            <div className="playlist-preview">
                <Link className="playlist-preview" to={`/playlists/${this.props.playlist.id}`}>
                    <img className="play-prev-thumb" src={window.cloud} />
                    <div className="pl-title-box">
                        <h3>{this.props.playlist.title}</h3>
                    </div>
                    <h4>{formatDate(this.props.playlist.created_at)}</h4>
                    <div className="crud-buttons">
                       
                        {deleteButton}
                    </div>
                </Link>
            </div>
        )
    }
}

export default PlaylistPreview;