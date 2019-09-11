import React from 'react';
import CatagoryIndexItem from './catagory_index_item';

class CatagoryIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    render(){
        // if (!(this.props.songs)){
        //     return <div className="main-index">Loading</div>
        // }
        let group1 = this.props.songs.slice(0, 4)
        let group2 = this.props.songs.slice(4, 8)
        let group3 = this.props.songs.slice(8, 12)
        let group4 = this.props.songs.slice(12)
        
        return (
        <div className="main-index">
            <CatagoryIndexItem catagory="New Releases" description="Fresh tracks hot off the Active Storage blob" songs={group1}/>
                <CatagoryIndexItem catagory="Trending" description="Most popular on LoudCloud" songs={group2}/>
                <CatagoryIndexItem catagory="Donnie's Picks" description="Picked by the artist/developer himself" songs={group3}/>
                <CatagoryIndexItem catagory="Classic Jams" description="Tunes that never get old" songs={group4}/>
        </div>
        )
    }
}

export default CatagoryIndex;