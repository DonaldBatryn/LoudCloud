import React from 'react';
import Player from './player'


class PlayBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSong: this.props.currentSong,
            isPlaying: this.props.isPlaying,

        }
        this.handlePlay = this.handlePlay.bind(this)
    }

  

    handlePlay(){
        let audioPlayer = document.getElementById("audio-player")
        if (this.state.isPlaying === false && this.state.currentSong !== ""){
            this.props.play(this.props.currentSong)
            this.setState({ isPlaying: true })
            audioPlayer.setAttribute('src', this.props.currentSong.song_url)
            audioPlayer.play();
        } else if (this.state.isPlaying === false && this.state.currentSong === ""){
            this.props.play(this.props.randomSong)
            this.setState({ isPlaying: true, currentSong: this.props.randomSong })
            audioPlayer.setAttribute('src', this.props.randomSong.song_url)
            audioPlayer.play();
        } else if (this.state.isPlaying === true) {
            this.props.pause()
            this.setState({ isPlaying: false })
            audioPlayer.pause();
        } else {
            return
        }
    }

    render(){

        let playPause;
        if (this.state.isPlaying === false){
            playPause = <div ><button onClick={() => this.handlePlay()} className="icon-play"><img src={window.play} alt="play" /></button></div>
        } else {
            playPause = <div ><button onClick={() => this.handlePlay()} className="icon-pause"><img src={window.pause} alt="pause" /></button></div>
        }
        let songInfo = ""
        if (this.state.currentSong){
            songInfo = (
                <div className="current-song-info">
                    <h5>{this.state.currentSong.title}</h5>
                    <h5>by:&nbsp;&nbsp;{this.state.currentSong.artist}</h5>
                    <h5>from:&nbsp;&nbsp;{this.state.currentSong.album_name}</h5>

                </div>
            )
        }
        return (
            <nav id="play-nav">

                <div ><button className="icon-rewind"><img src="/assets/rewind.png" alt="rewind" /></button></div>
                {/* <div ><button onClick={this.handlePlay(audioPlayer)} className="icon-play"><img src="/assets/play.png" alt="play" /></button></div> */}
                {playPause}
                <div ><button className="icon-forward"><img src="/assets/forward.png" alt="forward" /></button></div>
                <div ><button className="icon-shuffle"><img src="/assets/shuffle.png" alt="shuffle" /></button></div>
                <div ><button className="icon-repeat"><img src="/assets/repeat.png" alt="repeat" /></button></div>
                <Player song={this.state.currentSong}/>
                <div className="progress-bar"></div>
                {songInfo}
            </nav>
        )
    }
}

export default PlayBar;


{/* <div className="progress-bar">0:00 -----------0-----------------------------------------------------</div> */}
    // <div className="track-info">
        {/* <h5> NOW PLAYING INFO</h5> */}
        {/* {/* <p>{this.props.currentSong.title}</p> */}
                    // <p>{artistName}</p>
                    // <p>{this.props.currentSong.albumName}</p> */}
    {/* </div> */}