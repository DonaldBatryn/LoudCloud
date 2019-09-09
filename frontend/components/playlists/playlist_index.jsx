import React from 'react'
import PlaylistIndexItem from './playlist_index_item'

class PlaylistIndex extends React.Component{

    render(){
        return (
            <div className="main-pl-index">
                <PlaylistIndexItem />
                <PlaylistIndexItem />
                <PlaylistIndexItem />
                <PlaylistIndexItem />
                <PlaylistIndexItem />
            </div>
        )
    }
}

export default PlaylistIndex;