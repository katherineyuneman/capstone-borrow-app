class Rental < ApplicationRecord
  belongs_to :user
  has_many :book_rentals, dependent: :destroy
  has_many :books, through: :book_rentals
  scope :sorted_rentals, -> {order(:month)}

  accepts_nested_attributes_for :book_rentals
  accepts_nested_attributes_for :books
end
