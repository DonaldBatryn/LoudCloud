import React from 'react';
import Player from './player'
import ProgressBar from './progress'


class PlayBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            duration: "",
            currentTime: 0,
            currentVol: 1
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.handleMute = this.handleMute.bind(this);
    }

    handlePlay(){
        let audioPlayer = document.getElementById("audio-player");
        // let playInterval;
        if (this.props.isPlaying === false && this.props.currentSong !== ""){
            if (this.props.paused){
                audioPlayer.currentTime = this.state.currentTime
                this.props.unpause();
                this.setState({ duration: audioPlayer.duration})
           
                audioPlayer.play();
            } else {
                this.props.play(this.props.currentSong)
                audioPlayer.setAttribute('src', this.props.currentSong.song_url)
                this.setState({ duration: audioPlayer.duration })
           
                audioPlayer.play();
            }
        } else if (this.props.isPlaying === false && this.props.currentSong === ""){
            this.props.play(this.props.randomSong)
            audioPlayer.setAttribute('src', this.props.randomSong.song_url)
            this.setState({ duration: audioPlayer.duration })
          
            audioPlayer.play();
        } else if (this.props.isPlaying === true) {
       
            this.setState({ currentTime: audioPlayer.currentTime })
            this.props.pause()
            audioPlayer.pause();
        } else {
            return
        }
    }

    handleMute() {
        const muteImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/mute.png"
        const soundImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/volume.png"
        let audioPlayer = document.getElementById("audio-player");
        let volButton = document.getElementById("mute-button")
        if (audioPlayer.volume > 0) {
            audioPlayer.volume = 0;
            volButton.src = muteImage
        } else {
            audioPlayer.volume = this.state.currentVol;
            volButton.src = soundImage
        }
    }

    render(){
        let { currentSong, duration } = this.props;

        let playPause;
        if (this.props.isPlaying === false){
            playPause = <div>
                            <button onClick={() => this.handlePlay()} className="icon-play ">
                                <img className="controls" src={window.play} alt="play" />
                            </button>
                        </div>
        } else {
            playPause = <div>
                            <button onClick={() => this.handlePlay()} className="icon-pause ">
                                <img className="controls" src={window.pause} alt="pause" />
                            </button>
                        </div>
        }
        let previewImage = ""
        let songInfo = ""
        if (currentSong){
            songInfo = (
                <div className="current-song-info">
                    <h5>{currentSong.title}</h5>
                    <h5>by:&nbsp;&nbsp;{currentSong.artist}</h5>
                    <h5>from:&nbsp;&nbsp;{currentSong.album_name}</h5>

                </div>
            )
            previewImage = <img className="playbar-thumb" src={currentSong.image_url} />
        }
        let audioPlayer = document.getElementById("audio-player")
        let progBar = this.props.isLoggedIn ? (
            <ProgressBar song={audioPlayer} />
        ) : ""
        return (
            <nav id="play-nav">
                <div><button className="icon-rewind "><img className="controls" src={window.rewind} alt="rewind" /></button></div>
                {playPause}
                <div><button className="icon-forward "><img className="controls" src={window.forward} alt="forward" /></button></div>
                <div><button className="icon-repeat "><img className="controls" src={window.repeat} alt="repeat" /></button></div>
                <div><button onClick={this.handleMute} className="icon-shuffle "><img id="mute-button" className="controls" src="https://musical-breakout-js.s3.us-east-2.amazonaws.com/volume.png" alt="mute" /></button></div>
                <div className="progress-bar">
                    <Player song={currentSong} duration={duration} />
                    {progBar}
                </div>
                {previewImage}
                {songInfo}
            </nav>
        )
    }
}

export default PlayBar;