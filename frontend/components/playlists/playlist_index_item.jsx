import React from 'react'
import PlaylistSnippet from './playlist_snippet'

class PlaylistIndexItem extends React.Component{

    componentDidMount(){

    }

    render(){
        // DO NOT COMMENT OUT
        if (!(this.props.playlist)) {
            return <div className="playlist-index-item"></div>
        }
        return (
            <div className="playlist-index-item">
                <PlaylistSnippet playlist={this.props.playlist} author={this.props.author} />
                {/* <h3>PlaylistSnippet</h3> */}
            </div>
        )
    }
}

export default PlaylistIndexItem;