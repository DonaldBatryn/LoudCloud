import React from 'react';
import { formatDate } from '../../utils/date_util';
import PlaylistPreview from '../playlists/playlist_preview';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchSongs();
        this.props.fetchPlaylists();
    }

    componentDidUpdate(prevProps, nextProps){
        if (prevProps !== nextProps){
            window.scrollTo(0, 0);
        }
    }
   

    render(){
        if (!(this.props.user)){
            return <div className="main-user-show"></div>
        }

        let { username, created_at, playlists, id, image_url } = this.props.user
        let { currentUser } = this.props;
        let showBody;
        let createLink = "";
        let that = this;
     
        if (playlists.length > 0){
            showBody = playlists.map(playlist => {
                const updatedPlaylist = that.props.playlists[playlist.id]
                return <PlaylistPreview key={updatedPlaylist.id} 
                    currentUser={that.props.currentUser} 
                    playlist={updatedPlaylist} 
                    deletePlaylist={that.props.deletePlaylist}
                    />
            })
        }else if (id === currentUser){
            showBody = <div className="playlist-blank">"You don't have any playlists yet."</div>
        } else {
            showBody = <div className="playlist-blank">"This user doesn't have any playlists yet."</div>
        }
        
        if (id === currentUser && username !== "Guest"){
            createLink = <Link className="create-pl-link" to="/playlists/new"><h2>Create a New Playlist</h2></Link>
        }

        let pluralize = playlists.length === 1 ? "Playlist" : "Playlists"
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