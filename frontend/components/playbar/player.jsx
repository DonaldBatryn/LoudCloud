import React from 'react'
import ReactPlayer from 'react-player';

class Player extends React.Component {


    render(){
        return (
            <div className="player-wrapper">
                <ReactPlayer
                    url="app/assets/images/diver_i_hope_yr_not.mp3" 
                    playing="false"
                    className="react-player"
                    width='100%'
                    height='100%' />
            </div>
        )
    }
}
export default Player;



//