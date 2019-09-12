import React from 'react'


class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playing: false,
            duration: 0,
            vol: 100,
            song_url: this.props.song.song_url
        }
    }

    render(){
        return (
            <audio id="audio-player" src={this.state.song_url}></audio>
        )
    }
}
export default Player;



