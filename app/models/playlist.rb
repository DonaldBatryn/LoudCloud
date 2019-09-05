class Playlist < ApplicationRecord
    validates :title, :user_id, presence:true
    validates :title, uniqueness:{ scope: :user_id, 
    message: "Can't have two playlists with the same name"}


    has_many :playlist_songs,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong

    has_many :songs,
    through: :playlist_songs,
    source: :songs

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :image
end
