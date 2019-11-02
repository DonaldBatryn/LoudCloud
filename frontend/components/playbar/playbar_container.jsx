import { connect } from 'react-redux';
import PlayBar from './playbar';
import { play } from '../../actions/user_actions'
import { pause, unpause, setLoopOff, setLoopOn } from '../../actions/song_actions'

const msp = state => {
    let idArray = Object.keys(state.entities.songs)
    let randId = idArray[Math.floor(Math.random() * idArray.length)]
    return ({
        currentSong: state.ui.currentSong,
        isPlaying: !(state.ui.paused),
        paused: state.ui.paused,
        randomSong: state.entities.songs[randId],
        duration: "",
        isLoggedIn: !!state.session.id,
        loopOn: state.ui.loopOn
        
    })
}

const mdp = dispatch => {
    return ({
        play: (song) => dispatch(play(song)),
        pause: () => dispatch(pause()),
        unpause: () => dispatch(unpause()),
        setLoopOn: () => dispatch(setLoopOn()),
        setLoopOff: () => dispatch(setLoopOff())
    })
}

export default connect(msp, mdp)(PlayBar)