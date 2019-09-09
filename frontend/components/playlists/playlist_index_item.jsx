import React from 'react'
import PlaylistSnippet from './playlist_snippet'

class PlaylistIndexItem extends React.Component{

    render(){

        return (
            <div className="playlist-index-item">
                <PlaylistSnippet />
            </div>
        )
    }
}

export default PlaylistIndexItem;