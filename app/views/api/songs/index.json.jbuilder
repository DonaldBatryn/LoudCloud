@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :user_id, :title, :album_name, :artist, :description, :created_at
    end
end