import React from 'react'

class Player extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let { currentSong } = this.props;
        if (!(currentSong)){
            return (
                <audio id="audio-player" src=""></audio>
            )
        }
        let player = <audio id="audio-player" src={currentSong.audioUrl}></audio>
        debugger
        return (
            <div>{player}</div>
        )
    }
}

export default Player;