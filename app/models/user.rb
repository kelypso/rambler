class User < ApplicationRecord
    has_secure_password

    has_many :trips, dependent: :destroy
    has_many :entries, through: :trips

    validates :name, presence: true
    validates :email, presence: true
    validates :username, presence: true
end
