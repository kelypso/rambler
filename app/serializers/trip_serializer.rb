class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :duration
end
