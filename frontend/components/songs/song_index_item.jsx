import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSong, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions';

class SongIndexItem extends React.Component {

    render(){
        return (
        <div className="song">
            {/* <Link to={`/songs/${this.props.songId}`}> */}
                <img src={window.cloud} />
                
            {/* </Link> */}
        </div>
        )
    }
}

export default SongIndexItem;