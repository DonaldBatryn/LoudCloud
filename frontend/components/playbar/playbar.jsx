import React from 'react';
import Player from './player'
import Progress from './progress'


class PlayBar extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     currentSong: this.props.currentSong,
        //     isPlaying: this.props.isPlaying,

        // }
        this.handlePlay = this.handlePlay.bind(this)
    }

    // componentDidUpdate(prevProps, nextProps){
    //     if (nextProps !== prevProps){
    //         this.setState(this.state)
    //     }
    // }
  

    handlePlay(){
        let audioPlayer = document.getElementById("audio-player")
        if (this.props.isPlaying === false && this.props.currentSong !== ""){
            this.props.play(this.props.currentSong)
            // this.setState({ isPlaying: true })
            audioPlayer.setAttribute('src', this.props.currentSong.song_url)
            audioPlayer.play();
        } else if (this.props.isPlaying === false && this.props.currentSong === ""){
            this.props.play(this.props.randomSong)
            // this.setState({ isPlaying: true, currentSong: this.props.randomSong })
            audioPlayer.setAttribute('src', this.props.randomSong.song_url)
            audioPlayer.play();
        } else if (this.props.isPlaying === true) {
            this.props.pause()
            // this.setState({ isPlaying: false })
            audioPlayer.pause();
        } else {
            return
        }
    }

    render(){

        let playPause;
        if (this.props.isPlaying === false){
            playPause = <div ><button onClick={() => this.handlePlay()} className="icon-play "><img className="controls" src={window.play} alt="play" /></button></div>
        } else {
            playPause = <div ><button onClick={() => this.handlePlay()} className="icon-pause "><img className="controls" src={window.pause} alt="pause" /></button></div>
        }
        let previewImage = ""
        let songInfo = ""
        if (this.props.currentSong){
            songInfo = (
                <div className="current-song-info">
                    <h5>{this.props.currentSong.title}</h5>
                    <h5>by:&nbsp;&nbsp;{this.props.currentSong.artist}</h5>
                    <h5>from:&nbsp;&nbsp;{this.props.currentSong.album_name}</h5>

                </div>
            )
            previewImage = <img className="playbar-thumb" src={this.props.currentSong.image_url} />
        } 
        
        return (
            <nav id="play-nav">

                <div ><button className="icon-rewind "><img className="controls" src={window.rewind} alt="rewind" /></button></div>
                {/* <div ><button onClick={this.handlePlay(audioPlayer)} className="icon-play"><img src="/assets/play.png" alt="play" /></button></div> */}
                {playPause}
                <div ><button className="icon-forward "><img className="controls" src={window.forward} alt="forward" /></button></div>
                <div ><button className="icon-shuffle "><img className="controls" src={window.shuffle} alt="shuffle" /></button></div>
                <div ><button className="icon-repeat "><img className="controls" src={window.repeat} alt="repeat" /></button></div>
                <div className="progress-bar">
                    <Player song={this.props.currentSong}/>

                </div>
                {/* <img className="playbar-thumb" src={this.props.currentSong.image_url} /> */}
                {previewImage}
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