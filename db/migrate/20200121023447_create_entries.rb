class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :date
      t.string :location
      t.string :meals
      t.string :activities
      t.string :encounters
      t.text :lowlight
      t.text :delight
      t.text :highlight
      t.string :objectives
      t.string :photo
      t.integer "trip_id", null: false
      t.integer "user_id", null: false

      t.timestamps
    end
  end
end
