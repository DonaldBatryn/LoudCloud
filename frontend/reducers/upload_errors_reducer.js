import { RECEIVE_UPLOAD_ERRORS, CLEAR_UPLOAD_ERRORS } from "../actions/song_actions";

const noErrors = []

const uploadErrorsReducer = (state = noErrors, action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_UPLOAD_ERRORS:
            return action.errors
        case CLEAR_UPLOAD_ERRORS:
            return noErrors
        default:
            return state
    }
}

export default uploadErrorsReducer;