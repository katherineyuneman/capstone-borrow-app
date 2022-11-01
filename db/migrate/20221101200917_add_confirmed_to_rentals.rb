class AddConfirmedToRentals < ActiveRecord::Migration[6.1]
  def change
    add_column :rentals, :confirmed, :boolean
  end
end
