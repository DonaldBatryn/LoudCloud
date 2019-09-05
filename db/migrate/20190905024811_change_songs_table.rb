class ChangeSongsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :description, :string
    remove_column :songs, :artist_id
    add_column :songs, :user_id, :integer
    add_column :songs, :artist, :string
  end
end
