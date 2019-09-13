import React from 'react'
import { formatDate } from '../../utils/date_util'
import { Link } from 'react-router-dom'

class PlaylistSnippet extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.history.push(`/users/${this.props.author.id}`)
    }

    render(){
        let { playlist, author } = this.props
        if (!playlist || !author){
            return <div>Loading...</div>
        }
        return (
            <div className="playlist-snip"> <Link className="playlist-snip" to={`/playlists/${playlist.id}`} >
                <img className="pl-image" src={playlist.image_url}  />
                <div className="pl-info">
                  
                    <h3>{playlist.title}</h3>
                   
                    <h5 className="smallest-txt">Created At:&nbsp;{formatDate(playlist.created_at)}&nbsp;</h5>
                </div></Link>
                <div id="user-link" onClick={() => this.handleClick()}>by&nbsp;&nbsp;{author.username}</div>
            </div>
        )
    }
}

export default PlaylistSnippet;