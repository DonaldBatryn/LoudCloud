import React from 'react'

class SongSnippet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPaused: true
    
        }
    }

    handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)

        if (this.state.isPaused === true) {
            // this.props.play(this.props.song)
            player.play();
            
            this.setState({ isPaused: false })
        } else {
            // this.props.pause();
            player.pause()
            this.setState({ isPaused: true })
        }
    }

    render(){
        let { song } = this.props;
        if (!song){
            return <div>Loading...</div>
        }
        return (
            <div className="song-snip">
                <img className="pl-song-image" src={song.image_url} onClick={() => this.handlePlay()}/>
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