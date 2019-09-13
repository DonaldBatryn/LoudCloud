import React from 'react';
import Player from './player'
import Progress from './progress'


class PlayBar extends React.Component {
    constructor(props){
        super(props)
     
        this.handlePlay = this.handlePlay.bind(this)
    }

    handlePlay(){
        let audioPlayer = document.getElementById("audio-player")
        if (this.props.isPlaying === false && this.props.currentSong !== ""){
            this.props.play(this.props.currentSong)
            audioPlayer.setAttribute('src', this.props.currentSong.song_url)
            audioPlayer.play();
        } else if (this.props.isPlaying === false && this.props.currentSong === ""){
            this.props.play(this.props.randomSong)
            audioPlayer.setAttribute('src', this.props.randomSong.song_url)
            audioPlayer.play();
        } else if (this.props.isPlaying === true) {
            this.props.pause()
            audioPlayer.pause();
        } else {
            return
        }
    }

    render(){
        let { currentSong } = this.props;

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
        
        return (
            <nav id="play-nav">
                <div><button className="icon-rewind "><img className="controls" src={window.rewind} alt="rewind" /></button></div>
                {playPause}
                <div><button className="icon-forward "><img className="controls" src={window.forward} alt="forward" /></button></div>
                <div><button className="icon-shuffle "><img className="controls" src={window.shuffle} alt="shuffle" /></button></div>
                <div><button className="icon-repeat "><img className="controls" src={window.repeat} alt="repeat" /></button></div>
                <div className="progress-bar">
                    <Player song={currentSong}/>
                </div>
                {previewImage}
                {songInfo}
            </nav>
        )
    }
}

export default PlayBar;