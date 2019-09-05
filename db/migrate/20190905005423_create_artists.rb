class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :city, null: false

      t.timestamps
    end
    add_index :artists, :name, unique:true
  end
end
