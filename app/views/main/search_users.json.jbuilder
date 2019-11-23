json.items do
    json.array!(@items) do |item|
        json.id item.id
        json.username item.username
        json.imageUrl url_for(item.image) if item.image.attached?
    end
end