import React from 'react'
import { formatDate } from '../../utils/date_util'
import { Link } from 'react-router-dom';

class PlaylistPreview extends React.Component {

    render() {
        return (
            <div className="playlist-preview">
                <Link className="playlist-preview" to={`/playlists/${this.props.playlist.id}`}>
                    <img className="play-prev-thumb" src="/assets/cloud.png" />
                    <h3>{this.props.playlist.title}</h3>
                    <h4>{formatDate(this.props.playlist.created_at)}</h4>
                </Link>
            </div>
        )
    }
}

export default PlaylistPreview;