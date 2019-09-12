import React from 'react'


class Player extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     playing: false,
        //     duration: 0,
        //     vol: 100,
        //     song_url: this.props.song.song_url
        // }
    }

    render(){
        if (!(this.props.currentSong)){
            return (
                <audio id="audio-player" src=""></audio>
            )
        }
        
        return (
            <audio id="audio-player" src={this.props.currentSong.audioUrl}></audio>
        )
    }
}
export default Player;



