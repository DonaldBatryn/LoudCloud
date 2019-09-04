import { connect } from 'react-redux';
import PlayBar from './playbar';

const msp = state => {
    return ({
        currentSong: "",
        trackLength: "",
        artist: "",
        album: ""
    })
}

// const mdp = dispatch => {
//     return ({

//     })
// }

export default connect(msp)(PlayBar)