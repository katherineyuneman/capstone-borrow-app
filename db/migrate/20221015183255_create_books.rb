class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.references :title, null: false, foreign_key: true
      t.boolean :rented
      t.date :expected_return
      t.string :conditon

      t.timestamps
    end
  end
end
