import {
    RECEIVE_PLAYLIST_ERRORS,
    CLEAR_PLAYLIST_ERRORS
} from '../actions/playlist_actions'


const noPlErrors = []

const playlistErrorsReducer = (state = noPlErrors, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            debugger
            return action.errors
        case CLEAR_PLAYLIST_ERRORS:
            return noPlErrors
        default:
            return state
    }
}

export default playlistErrorsReducer;