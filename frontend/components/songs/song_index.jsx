import React from 'react';
import SongPreview from './song_preview'

class SongIndex extends React.Component{

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        let allSongs = this.props.songs.map(song => {
            return <div className="song-index-item" ><SongPreview key={song.id} song={song} /></div>
        })
        return (
            <div className="main-song-index">
                <div className="song-index-header">
                    <h3>Check out LoudCloud Users'</h3>
                    <h1> Favorite Donnie Tracks </h1>
                </div>
                {allSongs}
            </div>
        )
    }
}

export default SongIndex;