@playlists.with_attached_image.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :user_id, :title, :created_at, :song_ids
        json.imageUrl url_for(playlist.image) if playlist.image.attached?
        json.song_ids playlist.song_ids
    end 
end