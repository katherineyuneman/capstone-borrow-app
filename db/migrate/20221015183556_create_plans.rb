class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.references :user, null: false, foreign_key: true
      t.decimal :number_books

      t.timestamps
    end
  end
end
