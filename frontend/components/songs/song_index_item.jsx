import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSong, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions';

class SongIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            paused: true
        }
    }

    handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)
        if (this.state.paused === true) {
            player.play();
            this.setState({ paused: false })
        } else {
            player.pause()
            this.setState({ paused: true })
        }
    }

    render(){
        let { song } = this.props;
        if (!song){
            return <div className="song"></div>
        }
        return (
        <div className="song">
                <img src={this.props.song.image_url} onClick={() => this.handlePlay()}/>
                <div className="main-thumb-info">
                    <h5>{song.title}</h5>
                    <h6>{song.artist}</h6>
                </div>
        </div>
        )
    }
}

export default SongIndexItem;