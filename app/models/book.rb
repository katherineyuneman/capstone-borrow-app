class Book < ApplicationRecord
  belongs_to :title
  has_many :book_rentals
  accepts_nested_attributes_for :title

  # def self.available_inventory
  #   self.joins(:books).select(
  #       'transactions.description','transactions.id as id', 'budgets.id as budget_id', 'transactions.amount',
  #       'transactions.created_at', 'months.month_desc', 'months.year', 'categories.description as category_description')
  # end



    
end
