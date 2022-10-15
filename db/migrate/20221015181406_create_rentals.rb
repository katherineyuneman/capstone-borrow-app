class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.string :month
      t.date :receive_date
      t.date :return_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
