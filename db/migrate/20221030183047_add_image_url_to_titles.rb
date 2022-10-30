class AddImageUrlToTitles < ActiveRecord::Migration[6.1]
  def change
    add_column :titles, :image_url, :string
  end
end
