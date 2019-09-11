import * as UserAPIUtil from '../utils/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_FETCH_ERRORS = 'RECEIVE_FETCH_ERRORS'
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG'

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveCurrentSong = result => ({
    type: RECEIVE_CURRENT_SONG,
    result
})

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = (id) => dispatch => {
    return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
}

export const play = (song, userId) => dispatch => {
    if (userId) {
        return UserAPIUtil.play(song.id, userId).then(result => dispatch(receiveCurrentSong(result)))
    } else {
        dispatch(receiveCurrentSong({song}))
    }
}