// import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const noErrors = {
    errors: []
}

const sessionErrorsReducer = (state = noErrors, action) => {
    // Object.freeze(state);
    // switch (action.type) {
    //     case RECEIVE_CURRENT_USER:
    //         return Object.assign({}, state, { errors: [] });
    //     case RECEIVE_SESSION_ERRORS:
    //         return Object.assign({}, state, { errors: action.errors });
    //     default:
    //         return state;
    // }
};

export default sessionErrorsReducer;