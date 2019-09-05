class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.string :album_name, null:false
      t.integer :artist_id, null:false

      t.timestamps
    end
    add_index :songs, [:title, :album_name], unique: true
  end
end
