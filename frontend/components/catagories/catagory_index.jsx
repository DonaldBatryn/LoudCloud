import React from 'react';
import CatagoryIndexItem from './catagory_index_item';

class CatagoryIndex extends React.Component {

    render(){
        return (
        <div className="main-index">
            <CatagoryIndexItem catagory="New Releases" description="Fresh tracks hot off the Active Storage blob" songs={[1, 2, 3, 4]}/>
            <CatagoryIndexItem catagory="Trending" description="Most popular on LoudCloud" songs={[5, 6, 7, 8]}/>
            <CatagoryIndexItem catagory="Donnie's Picks" description="Picked by the artist/developer himself" songs={[9, 10, 11, 12]}/>
            <CatagoryIndexItem catagory="Classic Jams" description="Tunes that never get old" songs={[13, 14, 15, 16]}/>
        </div>
        )
    }
}

export default CatagoryIndex;