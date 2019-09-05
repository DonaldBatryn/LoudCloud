@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :image, :songs
    end
end