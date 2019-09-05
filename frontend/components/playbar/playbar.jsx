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

                <div ><button className="icon-rewind"><img src="/assets/rewind.png" alt="rewind" /></button></div>
                <div ><button className="icon-play"><img src="/assets/play.png" alt="play" /></button></div>
                <div ><button className="icon-forward"><img src="/assets/forward.png" alt="forward" /></button></div>
                <div ><button className="icon-shuffle"><img src="/assets/shuffle.png" alt="shuffle" /></button></div>
                <div ><button className="icon-repeat"><img src="/assets/repeat.png" alt="repeat" /></button></div>
            </nav>
        )
    }
}

export default PlayBar;