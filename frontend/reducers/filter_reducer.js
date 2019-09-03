import { UPDATE_BOUNDS } from '../actions/filter_actions';


const filterReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case UPDATE_BOUNDS:
            return action.bounds;
        default:
            return state;
    }
}

export default filterReducer;