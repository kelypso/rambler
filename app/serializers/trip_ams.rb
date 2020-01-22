class TripSerializer < ActiveModel::Serializer
  attributes :name, :category, :duration
  has_one :user
  has_many :entries

  def initialize(trip_obj)
    @trip = trip_obj
  end

  def to_serialized_json 
    @trip.to_json(:include => {
        :user => {:except => [:id, :password_digest, :created_at, :updated_at]},
        :entries => {:except => [:id, :user_id, :trip_id, :created_at, :updated_at]}
    }, :except => [:id, :user_id, :created_at, :updated_at])
  end
end
