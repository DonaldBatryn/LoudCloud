@playlists.with_attached_image.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :user_id, :title, :created_at
        json.imageUrl url_for(playlist.image) if playlist.image.attached?
        json.track_ids playlist.tracks.ids
    end 
end