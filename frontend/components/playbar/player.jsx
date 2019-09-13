import React from 'react'


class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            song: null
        }
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



