class RentalsSerializer < ActiveModel::Serializer
  attributes :id, :month, :receive_date, :return_date

  has_many :book_rentals, include_nested_associations: true
end
