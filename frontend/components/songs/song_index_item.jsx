import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSong, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions';

class SongIndexItem extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     isPaused: this.props.isPaused
        // }
    }

    handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)
        
        if (this.props.isPaused === true) {
            this.props.unpause()
            this.props.play(this.props.song)
            player.play();
            // this.setState({ isPaused: false })
        } else if (this.props.isPaused === false && this.props.song !== this.props.currentSong){
            this.props.play(this.props.song)
            player.play();
        } else {
            this.props.pause();
            player.pause()
            // this.setState({ isPaused: true })
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