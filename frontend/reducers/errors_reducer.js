import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import uploadErrorsReducer from './upload_errors_reducer'
import playlistErrorsReducer from './playlist_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    playlist: playlistErrorsReducer,
    upload: uploadErrorsReducer
})

export default errorsReducer;