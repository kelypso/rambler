class User < ApplicationRecord
    has_secure_password

    has_many :trips, dependent: :destroy
    has_many :entries, through: :trips

    validates :name, :email, :username, presence: true
    validates :email, :username, uniqueness: true
end
