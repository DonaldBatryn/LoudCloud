json.items do
    json.array!(@items) do |item|
        json.id item.id
        json.title item.title
        json.album_name item.album_name
        json.artist item.artist
        json.imageUrl url_for(item.image) if item.image.attached?
    end
end