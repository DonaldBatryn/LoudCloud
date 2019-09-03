import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
    id: null

}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = {
                id: action.user.id,
                username: action.user.username
            }
            return Object.assign({}, state, newState);
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;

    }
}

export default sessionReducer;