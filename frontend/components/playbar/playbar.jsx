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
        // let artistName = function to grab name from artists table using song.artist_id

        return (
            <nav id="play-nav">

                <div ><button className="icon-rewind"><img src="/assets/rewind.png" alt="rewind" /></button></div>
                <div ><button className="icon-play"><img src="/assets/play.png" alt="play" /></button></div>
                <div ><button className="icon-forward"><img src="/assets/forward.png" alt="forward" /></button></div>
                <div ><button className="icon-shuffle"><img src="/assets/shuffle.png" alt="shuffle" /></button></div>
                <div ><button className="icon-repeat"><img src="/assets/repeat.png" alt="repeat" /></button></div>
                <div className="progress-bar">0:00 -----------0-----------------------------------------------------</div>
                <div className="track-info">
                    <h5> NOW PLAYING INFO</h5>
                    {/* <p>{this.props.currentSong.title}</p>
                    <p>{artistName}</p>
                    <p>{this.props.currentSong.albumName}</p> */}
                </div>
            </nav>
        )
    }
}

export default PlayBar;