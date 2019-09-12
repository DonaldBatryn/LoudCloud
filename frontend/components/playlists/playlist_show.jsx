import React from 'react'
import SongSnippet from '../songs/song_snippet'
import { fetchPlaylists } from '../../utils/playlist_api_util'
import { Link } from 'react-router-dom'


class PlaylistShow extends React.Component{

    componentDidMount(){
        let playlistId = parseInt(this.props.match.params.playlistId)
        this.props.fetchSongs().then(() => {
            this.props.fetchPlaylist(playlistId);

        });
        this.props.fetchUsers();
    }
    
    componentDidUpdate(prevProps){
        
    }
    
    render(){
        let { songs, playlist, users } = this.props
    
        if (!playlist || !songs){
            return <div className="pl-show-main">Loading...</div>
        }
        let song;
        let allSongs = playlist.song_ids.map(id => {
            song = songs[id]
            return <div key={`sng-${song.id}`} className="pl-song"><SongSnippet key={`sng-${song.id}`} song={song} /></div>
        })
        
        let editButton = "";
        if (this.props.currentUser === playlist.user_id){
            editButton = <div><button className="delete-pl-button" onClick={this.handleUpdate}>Update</button></div>
        }
        return (
            <div className="pl-show-main">
                <div className="pl-show-info">
                    <img className="pl-show-image" src={window.cloud}/>
                    <div className="pl-show-text">
                        <h2>{this.props.playlist.title}</h2>
                        <h4><Link to={`/users/${playlist.user_id}`}>by&nbsp;&nbsp;{users[playlist.user_id].username}</Link></h4>
                    </div>
                    {editButton}
                </div>
                <div className="pl-songs-box">
                    {allSongs}
                </div>
            </div>
        )
    }
}

export default PlaylistShow