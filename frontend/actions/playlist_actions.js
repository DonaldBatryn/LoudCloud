import * as PlaylistAPIUtil from '../utils/playlist_api_util'

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS"
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS"




const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})



const removePlaylist = (id) => ({
    type: REMOVE_PLAYLIST,
    playlistId: id
})

const receivePlaylistErrors = errors => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
})

const clearPlaylistErrors = () => ({
    type: CLEAR_PLAYLIST_ERRORS
})




export const createPlaylist = playlist => dispatch => (
    PlaylistAPIUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)),
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
)

export const fetchPlaylist = id => dispatch => (
    PlaylistAPIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)),
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
)

export const fetchPlaylists = () => dispatch => (
    PlaylistAPIUtil.fetchPlaylists().then(playlists => dispatch(receivePlaylists(playlists)),
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
)

export const updatePlaylist = playlist => dispatch => (
    PlaylistAPIUtil.updatePlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)),
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
)

export const deletePlaylist = id => dispatch => (
    PlaylistAPIUtil.deletePlaylist(id).then(id => dispatch(removePlaylist(id)),
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
)

export const clearPLErrors = () => {
    dispatch(clearPlaylistErrors())
}