json.partial! 'api/songs/song', song: @song
json.audioUrl url_for(@song.audio)
json.imageUrl url_for(@song.image)