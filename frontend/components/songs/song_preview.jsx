import React from 'react'


class SongPreview extends React.Component{
    constructor(props){
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {
            paused: true
        }
        this.revealDropdown = this.revealDropdown.bind(this)
    }

    handlePlay(){
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)
        if (this.state.paused === true){
            player.play();
            this.setState({ paused: false })
        } else {
            player.pause()
            this.setState({ paused: true })
        }
    }

    handleSelect(playlistId){
        return (e) => {
            e.stopPropagation();
            let selectedPL = this.props.playlists[playlistId];
            selectedPL.song_ids.push(this.props.song.id)
        }
    }

    toggleDropdown(){
        
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
        
        let playlistLis = Object.keys(this.props.playlists).map(id => {
            return <li key={id} className="drop-down-li" onClick={this.handleSelect(id)}>{this.props.playlists[id].title}</li>
        })
        // let playPauseImage;
        // if (this.state.paused === true){
        //     playPauseImage = <div className="press-to-play">></div>
        // }else {
        //     playPauseImage = <div className="press-to-pause">||</div>
        // }
        // {playPauseImage}
        return (
            <div className="song-preview">
                {/* <img className="song-preview-thumb" src={window.cloud}  /> */}
                <img className="song-preview-thumb" src={this.props.song.image_url} onClick={() => this.handlePlay()} />
                <div className="song-preview-info">
                    
                    <h3>{this.props.song.title}</h3>
                    <h4>by&nbsp;{this.props.song.artist}</h4>
                    <h4>from&nbsp;{this.props.song.album_name}</h4>
                </div>
                <div className="add-to-pl" onClick={this.revealDropdown}>
                        <h6 className="add-text">...

                        </h6>
                    <ul className={`dd drop-down-${this.props.song.id} hidden`} >

                        {playlistLis}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SongPreview;