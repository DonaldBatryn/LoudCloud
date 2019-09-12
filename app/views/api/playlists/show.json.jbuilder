
json.extract! @playlist, :id, :user_id, :title, :song_ids, :created_at
json.imageUrl url_for(@playlist.image) if @playlist.image.attached?
json.song_ids @playlist.song_ids
