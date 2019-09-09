import {
    RECEIVE_SONG,
    RECEIVE_SONGS,
    UPDATE_SONG,
    REMOVE_SONG
} from '../actions/song_actions'


const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {};
    switch (action.type){
        case RECEIVE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song })
        case UPDATE_SONG:
            newState = Object.assign({}, state)
            newState[action.song.id] = action.song
            return newState
        case REMOVE_SONG:
            newState = Object.assign({}, state)
            delete newState[action.songId]
            return newState;
        default:
            return state;
    }
}

export default songsReducer;