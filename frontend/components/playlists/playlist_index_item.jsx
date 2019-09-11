import React from 'react'
import PlaylistSnippet from './playlist_snippet'
import { Link } from 'react-router-dom';

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
            </div>
            
        )
    }
}

export default PlaylistIndexItem;

