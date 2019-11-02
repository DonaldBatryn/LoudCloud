import React from 'react';
import SongIndexItem from '../songs/song_index_item';

class CatagoryIndexItem extends React.Component {

    render(){
        let { 
            songs, 
            play, 
            pause, 
            unpause, 
            isPaused, 
            currentSong, 
            catagory, 
            description,
            loopOn 
        } = this.props;


        return (
        <div className="catagory-index-item">
            <div className="catagory-text">
                <h2 className="catagory-name">{catagory}</h2>
                <h4 className="catagory-description">{description}</h4>
            </div>
            <div className="song-group">
                <SongIndexItem 
                    song={songs[0]} 
                    play={play} 
                    pause={pause} 
                    unpause={unpause} 
                    isPaused={isPaused} 
                    currentSong={currentSong} 
                    loopOn={loopOn}
                />

                <SongIndexItem
                    song={songs[1]}
                    play={play}
                    pause={pause}
                    unpause={unpause}
                    isPaused={isPaused}
                    currentSong={currentSong}
                    loopOn={loopOn}
                />

                <SongIndexItem
                    song={songs[2]}
                    play={play}
                    pause={pause}
                    unpause={unpause}
                    isPaused={isPaused}
                    currentSong={currentSong}
                    loopOn={loopOn}
                />

                <SongIndexItem
                    song={songs[3]}
                    play={play}
                    pause={pause}
                    unpause={unpause}
                    isPaused={isPaused}
                    currentSong={currentSong}
                    loopOn={loopOn}
                />

              
            </div>
        </div>
        )
    }
}

export default CatagoryIndexItem;