import React from 'react'
import SongSnippet from '../songs/song_snippet'
import { fetchPlaylists } from '../../utils/playlist_api_util'

class PlaylistShow extends React.Component{

    componentDidMount(){
        let playlistId = parseInt(this.props.match.params.playlistId)
        // this.props.fetchPlaylists();
        this.props.fetchSongs();
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
            return <div className="pl-song"><SongSnippet key={`sng-${song.id}`} song={song} /></div>
        })
        return (
            <div className="pl-show-main">
                <div className="pl-show-info">
                    <img className="pl-show-image" src={window.cloud}/>
                    <div className="pl-show-text">
                        <h2>{this.props.playlist.title}</h2>
                        <h4>by&nbsp;&nbsp;{users[playlist.user_id].username}</h4>
                    </div>

                </div>
                <div className="pl-songs-box">
                    {allSongs}
                    {/* <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div> */}
                </div>
            </div>
        )
    }
}

export default PlaylistShow