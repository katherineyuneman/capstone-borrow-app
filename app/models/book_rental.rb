class BookRental < ApplicationRecord
  belongs_to :rental
  belongs_to :book
end
