import React from 'react'
import { formatDate } from '../../utils/date_util'
import PlaylistPreview from '../playlists/playlist_preview'

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }
   

    render(){
        if (!(this.props.user)){
            return <div className="main-user-show"></div>
        }

        let { username, created_at, playlists, id } = this.props.user
        let showBody
        if (this.props.user.playlists.length > 0){
            showBody = this.props.user.playlists.map(playlist => {
                return <PlaylistPreview key={playlist.id} playlist={playlist} />
            })
        }else if (id === this.props.currentUser){
            showBody = <div className="playlist-blank">"You don't have any playlists yet."</div>
        } else {
            showBody = <div className="playlist-blank">"This user doesn't have any playlists yet."</div>
        }

        let pluralize = this.props.user.playlists.length === 1 ? "Playlist" : "Playlists"
        return (
            <div className="main-user-show">
                <div className="user-box">
                    <div className="user-info">
                        <img className="show-thumb" src={window.cloud} />
                        <div className="deets">
                            <h2>{username}</h2>
                            <h3>Member Since:&nbsp;{formatDate(created_at)}</h3>
                            <h4>{playlists.length}&nbsp;{pluralize}</h4>
                            <h4>Num Followers</h4>
                        </div>
                    </div>
                    {showBody}
                </div>
            </div>
        )
    }
}


export default UserShow;