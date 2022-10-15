class CreateTitles < ActiveRecord::Migration[6.1]
  def change
    create_table :titles do |t|
      t.references :author, null: false, foreign_key: true
      t.string :description
      t.decimal :rating
      t.string :genre
      t.date :publication_date

      t.timestamps
    end
  end
end
