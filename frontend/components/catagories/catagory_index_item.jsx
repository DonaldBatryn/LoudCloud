import React from 'react';
import SongIndexItem from '../songs/song_index_item';

class CatagoryIndexItem extends React.Component {

    render(){
        return (
        <div className="catagory-index-item">
            <div className="catagory-text">
                <h2 className="catagory-name">{this.props.catagory}</h2>
                <h4 className="catagory-description">{this.props.description}</h4>
            </div>
            <div className="song-group">
                <SongIndexItem songId={this.props.songs[0]}/>
                <SongIndexItem songId={this.props.songs[1]}/>
                <SongIndexItem songId={this.props.songs[2]}/>
                <SongIndexItem songId={this.props.songs[3]}/>
            </div>
        </div>
        )
    }
}

export default CatagoryIndexItem;