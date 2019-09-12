import React from 'react';
import SongPreview from './song_preview'

class SongIndex extends React.Component{

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        let allSongs = this.props.songs.map(song => {
            return <div className="song-index-item" key={`song-${song.title}`} >
                <SongPreview
                    currentSong={this.props.currentSong}
                    paused={this.props.paused}
                    play={this.props.play} 
                    pause={this.props.pause} 
                    unpause={this.props.unpause} 
                    playlists={this.props.playlists} 
                    key={`song-${song.title}`} 
                    song={song} 
                /></div>
        })
        return (
            <div className="main-song-index">
                <div className="song-index-header">
                    <h3 className="sub-header">Check out LoudCloud Users'</h3>
                    <h1> Favorite Donnie Tracks </h1>
                    <div className="line"></div>
                </div>
                {allSongs}
            </div>
        )
    }
}

export default SongIndex;