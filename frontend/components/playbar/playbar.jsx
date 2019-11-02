import React from 'react';
import Player from './player';
import ProgressBar from './progress';
import Volume from './volume';

class PlayBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            duration: "",
            currentTime: 0,
            currentVol: 1,
            loopOn: false
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.toggleLoop = this.toggleLoop.bind(this);
    }

    handlePlay(){
        let audioPlayer = document.getElementById("audio-player");

        if (this.props.isPlaying === false && this.props.currentSong !== ""){
            if (this.props.paused){
                audioPlayer.currentTime = this.state.currentTime
                this.props.unpause();
                this.setState({ duration: audioPlayer.duration})
                // audioPlayer.setAttribute('loop', this.props.loopOn)
           
                audioPlayer.play();
            } else {
                this.props.play(this.props.currentSong)
                audioPlayer.setAttribute('src', this.props.currentSong.song_url)
                // audioPlayer.setAttribute('loop', this.props.loopOn)
                this.setState({ duration: audioPlayer.duration })
                
                audioPlayer.play();
            }
        } else if (this.props.isPlaying === false && this.props.currentSong === ""){
            this.props.play(this.props.randomSong)
            audioPlayer.setAttribute('src', this.props.randomSong.song_url)
            // audioPlayer.setAttribute('loop', this.props.loopOn)
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

    toggleLoop() {
        let repeatButton = document.getElementById("repeat");
        let audioPlayer = document.getElementById("audio-player");
        if (audioPlayer.getAttribute('loop') === 'true') {
            // this.setState({loopOn: 'false'})
            this.props.setLoopOff()
            audioPlayer.removeAttribute('loop', 'false');
            repeatButton.classList.remove('repeat')
        } else {
            // this.setState({loopOn: 'true'})
            console.log("hit setloop On")
            this.props.setLoopOn()
            audioPlayer.setAttribute('loop', 'true')
            repeatButton.classList.add('repeat')
        }
    }

    render(){
        let { currentSong, duration, pause } = this.props;

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
            <ProgressBar song={audioPlayer} pause={pause} />
        ) : ""
        let volBar = this.props.isLoggedIn ? (
            <Volume song={audioPlayer} />
        ) : ""
        return (
            <nav id="play-nav">
                <div><button className="icon-rewind "><img className="controls" src={window.rewind} alt="rewind" /></button></div>
                {playPause}
                <div><button className="icon-forward "><img className="controls" src={window.forward} alt="forward" /></button></div>
                <div><button id="repeat" onClick={this.toggleLoop} className="icon-repeat "><img className="controls" src={window.repeat} alt="repeat" /></button></div>
                {volBar}
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