import React from 'react'


class SongPreview extends React.Component{
    constructor(props){
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.revealDropdown = this.revealDropdown.bind(this)
    }

    handlePlay(){
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)
        if (this.props.paused === true){
            this.props.play(this.props.song)
            player.play();
        } else if (this.props.paused === false && this.props.song.id !== this.props.currentSong.id){
            this.props.play(this.props.song)
            player.play();
        } else {
            this.props.pause()
            player.pause()
        }
    }

    handleSelect(playlistId){
        return (e) => {
            e.stopPropagation();
            let selectedPL = this.props.playlists[playlistId];
            selectedPL.song_ids.push(this.props.song.id)
        }
    }

 

    revealDropdown(){
        let allDds = Array.from(document.getElementsByClassName("dd"));
        allDds.forEach((dd) => {
            dd.classList.add("hidden")
        })
        let songId = this.props.song.id
        let dd = document.getElementsByClassName(`drop-down-${songId}`)[0];
        dd.classList.toggle("hidden")
        setTimeout(() => {
            dd.classList.add("hidden")
        }, 6000)
    }

    render(){
        let { playlists, song } = this.props;
        let playlistLis = Object.keys(playlists).map(id => {
            return <li key={id} className="drop-down-li" onClick={this.handleSelect(id)}>{playlists[id].title}</li>
        })
        return (
            <div className="song-preview">
                {/* <img className="song-preview-thumb" src={window.cloud}  /> */}
                <img className="song-preview-thumb" src={song.image_url} onClick={() => this.handlePlay()} />
                <div className="song-preview-info">
                    
                    <h3>{song.title}</h3>
                    <h4>by&nbsp;{song.artist}</h4>
                    <h4>from&nbsp;{song.album_name}</h4>
                </div>
                <div className="add-to-pl" onClick={this.revealDropdown}>
                    <div className="add-text">...&nbsp;&nbsp;&nbsp;
                            <h6 className="hidden-pl-txt">Add to a Playlist</h6>
                        </div>
                    <ul className={`dd drop-down-${song.id} hidden`} >

                        {playlistLis}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SongPreview;