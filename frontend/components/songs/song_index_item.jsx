import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSong, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions';

class SongIndexItem extends React.Component {
    constructor(props){
        super(props);
      
    }

    handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)
        
        if (this.props.isPaused === true) {
            this.props.unpause()
            this.props.play(this.props.song)
            player.play();
        } else if (this.props.isPaused === false && this.props.song.id === this.props.currentSong.id) {
            this.props.pause();
            player.pause()
        } else if (this.props.isPaused === false && this.props.song.id !== this.props.currentSong.id){
            this.props.unpause();
            this.props.play(this.props.song)
            player.play();
        }
    }

    render(){
        let { song } = this.props;
        if (!song){
            return <div className="song"></div>
        }
        return (
        <div className="song">
                <img src={song.image_url} onClick={() => this.handlePlay()}/>
                <div className="main-thumb-info">
                    <h5 className="song-title-idx">{song.title}</h5>
                    <h6>{song.artist}</h6>
                </div>
        </div>
        )
    }
}

export default SongIndexItem;