class AddArrayToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :song_ids, :integer, array: true, default: []
  end
end
