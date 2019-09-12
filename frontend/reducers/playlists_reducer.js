import { 
    RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST
} from '../actions/playlist_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState;
    switch (action.type){
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
           
            newState = Object.assign({}, state, { [action.playlist.id]: action.playlist })
            return newState;
        case REMOVE_PLAYLIST:
            newState = Object.assign({}, state)
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;