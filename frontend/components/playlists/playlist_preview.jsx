import React from 'react'
import { formatDate } from '../../utils/date_util'
import { Link, Route } from 'react-router-dom';

class PlaylistPreview extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete(){
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push(`/users/${this.props.playlist.user_id}`)
    }

    render() {
        let { currentUser, playlist } = this.props;
        let deleteButton = "";
       
        if (currentUser === playlist.user_id){
            deleteButton = <div>
                            <button className="delete-pl-button" onClick={() => this.handleDelete() }>Delete</button>
                        </div>
        }
       
        return (
            <div className="playlist-preview">
                <Link className="playlist-preview" to={`/playlists/${playlist.id}`}>
                    <img className="play-prev-thumb" src={playlist.image_url} />
                    <div className="pl-title-box">
                        <h3>{playlist.title}</h3>
                    </div>
                    <h4>{formatDate(playlist.created_at)}</h4>
                    <div className="crud-buttons">
                        {deleteButton}
                    </div>
                </Link>
            </div>
        )
    }
}

export default PlaylistPreview;