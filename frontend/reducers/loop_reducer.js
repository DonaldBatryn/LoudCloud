import { LOOP_ON, LOOP_OFF } from '../actions/song_actions'



const loopReducer = (state = false, action) => {
    switch (action.type) {
        case LOOP_ON:
            return true;
        case LOOP_OFF:
            return false;
        default:
            return state;
    }
}

export default loopReducer;