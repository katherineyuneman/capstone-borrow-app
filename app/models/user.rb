class User < ApplicationRecord
    has_many :rentals
    has_secure_password
    validates :email, :password, :password_confirmation, presence: true
    validates :email, uniqueness: true

end
