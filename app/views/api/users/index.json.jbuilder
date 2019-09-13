@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :created_at, :image, :songs, :playlists
        json.set! :image_url, url_for(user.image) if user.image.attached?
    end
end
# json.set! :image_url, url_for(user.image)