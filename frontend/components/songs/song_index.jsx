import React from 'react';
import SongPreview from './song_preview'

class SongIndex extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchSongs();
    }

    render(){
        let { songs, currentSong, paused, play, pause, playlists, unpause } = this.props;
        let allSongs = songs.map(song => {
            return <div className="song-index-item" key={`song-${song.title}`} >
                <SongPreview
                    currentSong={currentSong}
                    paused={paused}
                    play={play} 
                    pause={pause} 
                    unpause={unpause} 
                    playlists={playlists} 
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