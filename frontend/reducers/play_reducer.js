import { RECEIVE_CURRENT_SONG } from '../actions/user_actions';



// const noSong = {
//     currentSong: ""
// }

const playReducer = (state = "", action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_CURRENT_SONG:
            return action.song
        default:
            return state;
    }
}

export default playReducer;