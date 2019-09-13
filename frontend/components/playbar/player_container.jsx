import { connect } from 'react-redux'
import Player from './player'
import { pause, unpause } from '../../actions/song_actions'

const msp = state => {
    return({
        song: state.ui.currentSong,
        users: state.entities.users,
        paused: state.ui.paused
    })
}

const mdp = dispatch => {
    return ({
        pause: () => dispatch(pause()),
        unpause: () => dispatch(unpause())
    })
}

export default connect(msp, mdp)(Player);