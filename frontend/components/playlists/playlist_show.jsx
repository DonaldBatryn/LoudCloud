import React from 'react'
import SongSnippet from '../songs/song_snippet'

class PlaylistShow extends React.Component{

    render(){
        // let allSongs = this.props.playlist.songs.map(song => {
        //     return <li className="pl-song"><SongSnippet key={song.id} song={song} /></li>
        // })
        return (
            <div className="pl-show-main">
                <div className="pl-show-info">

                </div>
                <div className="pl-songs-box">
                    {/* {allSongs} */}
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                    <div className="pl-song"></div>
                </div>
            </div>
        )
    }
}

export default PlaylistShow