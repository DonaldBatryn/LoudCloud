import { combineReducers } from 'redux';
import modalReducer from './modal_reducer'
import pausedReducer from './paused_reducer';
import playReducer from './play_reducer'
import loopReducer from './loop_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  currentSong: playReducer,
  paused: pausedReducer,
  loopOn: loopReducer
})

export default uiReducer;