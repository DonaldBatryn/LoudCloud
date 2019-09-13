import React from 'react';
import { formatDate } from '../../utils/date_util';
import PlaylistPreview from '../playlists/playlist_preview';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.fetchUsers();
        this.props.fetchPlaylists();
        this.props.fetchSongs();
    }
   

    render(){
        if (!(this.props.user)){
            return <div className="main-user-show"></div>
        }

        let { username, created_at, playlists, id, image_url } = this.props.user
        let showBody;
        let createLink = "";
        if (this.props.user.playlists.length > 0){
            showBody = this.props.user.playlists.map(playlist => {
          
                return <PlaylistPreview key={playlist.id} 
                    currentUser={this.props.currentUser} 
                    playlist={playlist} 
                    deletePlaylist={this.props.deletePlaylist}
                    />
            })
        }else if (id === this.props.currentUser){
            showBody = <div className="playlist-blank">"You don't have any playlists yet."</div>
        } else {
            showBody = <div className="playlist-blank">"This user doesn't have any playlists yet."</div>
        }
        
        if (id === this.props.currentUser && this.props.user.username !== "Guest"){
            createLink = <Link className="create-pl-link" to="/playlists/new"><h2>Create a New Playlist</h2></Link>
        }

        let pluralize = this.props.user.playlists.length === 1 ? "Playlist" : "Playlists"
        return (
            <div className="main-user-show">
                <div className="user-box">
                    <div className="user-info">
                        <img className="show-thumb" src={image_url} />
                        <div className="deets">
                            <h2>{username}</h2>
                            <h3>Member Since:&nbsp;{formatDate(created_at)}</h3>
                            <h4>{playlists.length}&nbsp;{pluralize}</h4>
                          
                        </div>
                    </div>
                    {showBody}
                    {createLink}
                </div>
            </div>
        )
    }
}


export default UserShow;