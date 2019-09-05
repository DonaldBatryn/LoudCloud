@playlists.each do |playlist|
    json.set! playlist.id do
        playlist.songs.with_attached_audio.with_attached_image.each do |song|
            json.set! song.id do
                json.extract! song, :id, :user_id, :title, :artist, :album_name, :description, :created_at
                json.audioUrl url_for(song.audio)
                json.imageUrl url_for(song.image)
            end
        end
    end
end