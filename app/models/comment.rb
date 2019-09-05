class Comment < ApplicationRecord
    validates :body, :user_id, :song_id, presence:true

    belongs_to :song,
    foreign_key: :song_id,
    class_name: :Song

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
