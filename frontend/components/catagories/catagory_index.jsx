import React from 'react';
import CatagoryIndexItem from './catagory_index_item';

class CatagoryIndex extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSongs();
        this.props.fetchPlaylists();
    }

    render(){
        let { songs, play, pause, unpause, isPaused, currentSong, loopOn } = this.props;

        let group1 = songs.slice(0, 4)
        let group2 = songs.slice(4, 8)
        let group3 = songs.slice(8, 12)
        let group4 = songs.slice(12)
        
        return (
        <div className="main-index">
            <CatagoryIndexItem 
                catagory="New Releases" 
                description="Fresh tracks hot off the Active Storage blob" 
                songs={group1} 
                play={play} 
                pause={pause} 
                unpause={unpause} 
                isPaused={isPaused} 
                currentSong={currentSong}
                loopOn={loopOn}
            />

            <CatagoryIndexItem 
                catagory="Trending" 
                description="Most popular on LoudCloud" 
                songs={group2} 
                play={play} 
                pause={pause} 
                unpause={unpause} 
                isPaused={isPaused} 
                currentSong={currentSong}
                loopOn={loopOn}
            />

            <CatagoryIndexItem 
                catagory="Donnie's Picks" 
                description="Picked by the artist/developer himself" 
                songs={group3} 
                play={play} 
                pause={pause} 
                unpause={unpause} 
                isPaused={isPaused} 
                currentSong={currentSong}
                loopOn={loopOn}
            />

            <CatagoryIndexItem 
                catagory="Classic Jams" 
                description="Tunes that never get old" 
                songs={group4} 
                play={play} 
                pause={pause} 
                unpause={unpause} 
                isPaused={isPaused} 
                currentSong={currentSong}
                loopOn={loopOn}
            />
        </div>
        )
    }
}

export default CatagoryIndex;