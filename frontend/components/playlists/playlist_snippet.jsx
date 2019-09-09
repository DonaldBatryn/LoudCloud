import React from 'react'

class PlaylistSnippet extends React.Component{

    render(){
        return (
            <div className="playlist-snip">
                <img className="pl-image" src={window.cloud} />
                <div className="pl-info">
                    <h3>Playlist Title</h3>
                    {/* <h3>{this.props.playlist.title}</h3> */}
                    <h4>Author's Username</h4>
                    <h5 className="smallest-txt">Created At,&nbsp;&nbsp;Num Comments&nbsp;</h5>
                </div>
            </div>
        )
    }
}

export default PlaylistSnippet;