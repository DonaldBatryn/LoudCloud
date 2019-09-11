import { combineReducers } from 'redux';
import modalReducer from './modal_reducer'
import pausedReducer from './paused_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  paused: pausedReducer
})

export default uiReducer;