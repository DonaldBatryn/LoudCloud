import React from 'react'

class SongSnippet extends React.Component {
    constructor(props){
        super(props);
      
    }

    handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)

        if (this.props.paused === true) {
            this.props.play(this.props.song)
            player.play();
        } else if (this.props.paused === false && this.props.song !== this.props.currentSong){
            this.props.play(this.props.song)
            player.play();
        } else {
            this.props.pause();
            player.pause()
           
        }
    }

    render(){
        let { song } = this.props;
        if (!song){
            return <div>Loading...</div>
        }
        return (
            <div className="song-snip" onClick={() => this.handlePlay()}>
                <img className="pl-song-image" src={song.image_url} />
                <div className="pl-song-info">
                    <h3>{song.title}</h3>
                    <h5>{song.artist}</h5>
                    <h5>{song.album_name}</h5>
                </div>
            </div>
        )
    }
}

export default SongSnippet;