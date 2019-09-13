json.extract! user, :id, :username, :created_at, :songs, :playlists
json.set! :image_url, url_for(user.image) if user.image.attached?
json.playlist_ids user.playlists.map {|playlist| playlist.id }
