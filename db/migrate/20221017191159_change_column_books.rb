class ChangeColumnBooks < ActiveRecord::Migration[6.1]
  def change

    rename_column :books, :conditon, :condition
    rename_column :titles, :description, :title

  end
end
