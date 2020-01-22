class Entry < ApplicationRecord
    belongs_to :user 
    belongs_to :trip

    validates :date, :location, presence: true
end
