import React from 'react'

class SongPreview extends React.Component{

    render(){
        return (
            <div className="song-preview">
                <img className="song-preview-thumb" src={window.cloud} />
                <div className="song-preview-info">
                    <h3>{this.props.song.title}</h3>
                    <h4>by&nbsp;{this.props.song.artist}</h4>
                    <h4>from&nbsp;{this.props.song.album_name}</h4>
                </div>
            </div>
        )
    }

}

export default SongPreview;