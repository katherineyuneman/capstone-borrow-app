class User < ApplicationRecord
    has_many :rentals
    belongs_to :plan
end
