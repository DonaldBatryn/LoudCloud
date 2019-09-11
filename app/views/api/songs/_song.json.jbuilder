json.extract! song, :id, :user_id, :title, :album_name, :artist, :description, :created_at
json.set! :song_url, url_for(song.audio)
json.set! :image_url, url_for(song.image)