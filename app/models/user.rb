class User < ApplicationRecord
    # has_many :rentals
    # belongs_to :plan
    has_secure_password
    # validates :email, :password, :password_confirmation, presence: true
    # validates :email, uniqueness: true

end
