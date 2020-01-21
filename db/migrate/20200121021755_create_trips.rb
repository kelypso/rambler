class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :category
      t.string :duration
      t.integer "user_id", null: false

      t.timestamps
    end
  end
end
