import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSong, pause, unpause } from '../../actions/song_actions'
import { play } from '../../actions/user_actions';

class SongIndexItem extends React.Component {

    render(){
        return (
        <div className="song">
            <img src={window.cloud} />
        </div>
        )
    }
}

export default SongIndexItem;