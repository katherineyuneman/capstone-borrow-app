class CreateBookRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :book_rentals do |t|
      t.references :rental, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
