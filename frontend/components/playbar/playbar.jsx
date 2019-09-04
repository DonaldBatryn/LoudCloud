import React from 'react';


class PlayBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSong: "",
            isPlaying: false,

        }
    }

    render(){

        return (
            <nav id="play-nav">

                <div className="icon-rewind"><button><img src="/assets/rewind.png" alt="rewind" /></button></div>
                <div className="icon-play"><button><img src="/assets/play.png" alt="play" /></button></div>
                <div className="icon-forward"><button><img src="/assets/forward.png" alt="forward" /></button></div>
                <div className="icon-shuffle"><button><img src="/assets/shuffle.png" alt="shuffle" /></button></div>
                <div className="icon-repeat"><button><img src="/assets/repeat.png" alt="repeat" /></button></div>
            </nav>
        )
    }
}

export default PlayBar;