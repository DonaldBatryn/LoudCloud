class Song < ApplicationRecord
    validates :title, :album_name, :user_id, :artist, presence: true
    validates :title, uniqueness: { scope: :album_name,
    message: "Album can't have the same song title twice" }

    has_one_attached :audio
    has_one_attached :image

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :playlist_songs,
    foreign_key: :song_id,
    class_name: :PlaylistSong

    has_many :playlists,
    through: :playlist_songs,
    source: :playlist
end
