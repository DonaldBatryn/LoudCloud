import * as UserAPIUtil from '../utils/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_FETCH_ERRORS = 'RECEIVE_FETCH_ERRORS'
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG'

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = users => ({
    type: RECEIVE_USERS,
    user
})

export const receive