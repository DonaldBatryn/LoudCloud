
// export default function selectPlaylistSongs(songList, playlistId){
//     const select = []
//     const songs = Object.values(songList)
//     songs.forEach(song => {

//     })
// }

// ----------- NOTES -----------

// click on albumcover in foreign page
// dispatch clear currentSong/pause:true/isPlaying:false
// dispatch action to store with: currentSong/song_url
// dispatch isPlaying: true
// dispatch paused:false
// //////
// each component that contains music to play needs mdp actions: { receiveCurrentSong }
// should replace currentSong in store, include song_url, and trigger rerender of player component as state is mapped to its props
// remove all direct interacton with audio player within these components