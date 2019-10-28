import React from 'react'

class Player extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let { currentSong, duration } = this.props;
        if (!(currentSong)){
            return (
                <audio id="audio-player" src=""></audio>
            )
        }
        let player = <audio id="audio-player" src={currentSong.audioUrl}></audio>
      
        return (
            <div className="player-div">{player}</div>
        )
    }
}

export default Player;