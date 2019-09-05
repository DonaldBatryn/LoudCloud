class Song < ApplicationRecord
    validates :title, :album_name, :artist_id, presence: true
    
end
