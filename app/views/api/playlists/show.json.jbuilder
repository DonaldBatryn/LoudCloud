
json.extract! @playlist.with_attached_image, :id, :user_id, :title, :song_ids, :created_at
json.set! :image_url, url_for(@playlist.image) if @playlist.image.attached?
@playlist.song_ids do |id|
    song = Song.find_by(id: id)
    json.partial! "api/songs/song", song: song
end
# json.song_ids @playlist.song_ids