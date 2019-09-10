import React from 'react'

class SongSnippet extends React.Component {

    render(){
        let { song } = this.props;
        if (!song){
            return <div>Loading...</div>
        }
        return (
            <div className="song-snip">
                <img className="pl-song-image" src={window.cloud} />
                <div className="pl-song-info">
                    <h3>{song.title}</h3>
                    <h5>{song.artist}</h5>
                    <h5>{song.album_name}</h5>
                </div>
            </div>
        )
    }
}

export default SongSnippet;