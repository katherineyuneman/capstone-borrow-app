class Rental < ApplicationRecord
  belongs_to :user
  has_many :book_rentals
  has_many :books, through: :book_rentals

  accepts_nested_attributes_for :book_rentals
  accepts_nested_attributes_for :books
end
