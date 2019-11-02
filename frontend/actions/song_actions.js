import * as SongAPIUtil from '../utils/song_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const REMOVE_SONG = "REMOVE_SONG"
export const PAUSE_SONG = "PAUSE_SONG"
export const UNPAUSE_SONG = "UNPAUSE_SONG"
export const UPDATE_SONG = "UPDATE_SONG"
export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS"
export const CLEAR_UPLOAD_ERRORS = "CLEAR_UPLOAD_ERRORS"
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS"
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS"
export const LOOP_ON = 'LOOP_ON';
export const LOOP_OFF = 'LOOP_OFF'

const loopOn = () => ({
    type: LOOP_ON
})

const loopOff = () => ({
    type: LOOP_OFF
})

const pauseSong = () => ({
    type: PAUSE_SONG
})

const unpauseSong = () => ({
    type: UNPAUSE_SONG
})

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
})

const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
})

const updateSong = (song) => ({
    type: UPDATE_SONG,
    song
})

const removeSong = (id) => ({
    type: REMOVE_SONG,
    songId: id
})

const receiveUploadErrors = errors => ({
    type: RECEIVE_UPLOAD_ERRORS,
    errors
})

const clearUploadErrors = errors => ({
    type: CLEAR_UPLOAD_ERRORS
})

const receiveRouteErrors = errors => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
})

const clearRouteErrors = () => ({
    type: CLEAR_ROUTE_ERRORS
})

export const pause = () => dispatch => (
    dispatch(pauseSong())
)

export const unpause = () => dispatch => (
    dispatch(unpauseSong())
)

export const upload = song => dispatch => (
    SongAPIUtil.uploadSong(song).then(song => dispatch(receiveSong(song)),
    err => dispatch(receiveUploadErrors(err.responseJSON)))
)

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)),
        err => dispatch(receiveRouteErrors(err.responseJSON)))
)

export const fetchSong = id => dispatch => (
    SongAPIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)),
        err => dispatch(receiveUploadErrors(err.responseJSON)))
)

export const searchSongs = query => dispatch => (
    SongAPIUtil.search(query).then(songs => dispatch(receiveSongs(songs)),
        err => dispatch(receiveUploadErrors(err.responseJSON)))
)

export const update = song => dispatch => (
    SongAPIUtil.updateSong(song).then(song => dispatch(updateSong(song)),
        err => dispatch(receiveUploadErrors(err.responseJSON)))
)

export const deleteSong = id => dispatch => (
    SongAPIUtil.deleteSong(id).then(id => dispatch(removeSong(id)),
    err => dispatch(receiveRouteErrors(err.responseJSON)))
)

export const clearErrs = () => dispatch => (
    dispatch(clearUploadErrors())
)

export const clearRouteErrs = () => dispatch => (
    dispatch(clearRouteErrors())
)

export const setLoopOn = () => dispatch => (
    dispatch(loopOn())
)

export const setLoopOff = () => dispatch => (
    dispatch(loopOff())
)