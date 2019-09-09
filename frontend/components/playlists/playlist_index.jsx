import React from 'react'
import PlaylistIndexItem from './playlist_index_item'

class PlaylistIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPlaylists();
        this.props.fetchUsers();
    }

    render(){
        // DO NOT COMMENT IN
        // if (!(this.props.playlist)){
        //     return <div className="main-pl-index"></div>
        // }
        let author;
        let allUsers = this.props.users
        let allPlaylists = this.props.playlists.map(playlist => {
            author = allUsers[playlist.user_id]
     
            return <PlaylistIndexItem key={`pl-${playlist.id}`} playlist={playlist} author={author}/>
        })
        return (
            <div className="main-pl-index">
                <div className="pl-index-header"></div>
                {allPlaylists}
            </div>
        )
    }
}

export default PlaylistIndex;