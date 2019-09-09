import React from 'react'
import { formatDate } from '../../utils/date_util'
import { Link } from 'react-router-dom'

class PlaylistSnippet extends React.Component{

    render(){
        if (!(this.props.playlist)) {
            return <div className="playlist-snip"></div>
        }
        let { playlist, author } = this.props
        return (
            <div className="playlist-snip">
                <img className="pl-image" src={window.cloud} />
                <div className="pl-info">
                    {/* <h3>Playlist Title</h3> */}
                    <h3>{playlist.title}</h3>
                    {/* <h4>By:&nbsp;{this.props.author.username}</h4> */}
                    <h5 className="smallest-txt">Created At:&nbsp;{formatDate(playlist.created_at)}&nbsp;by&nbsp;&nbsp;<Link to={`/users/${author.id}`}>{author.username}</Link></h5>
                </div>
            </div>
        )
    }
}

export default PlaylistSnippet;