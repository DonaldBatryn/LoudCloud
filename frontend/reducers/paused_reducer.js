import { PAUSE_SONG, UNPAUSE_SONG } from '../actions/song_actions'
import { RECEIVE_CURRENT_SONG } from '../actions/user_actions'


const pausedReducer = (state = true, action) => {
    switch (action.type){
        case RECEIVE_CURRENT_SONG:
            return false;
        case PAUSE_SONG:
            return true;
        case UNPAUSE_SONG:
            return false;
        default:
            return state;
    }
}

export default pausedReducer;