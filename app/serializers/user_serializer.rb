class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :username
  # has_many :trips, serializer: TripSerializer
  # has_many :entries, serializer: EntrySerializer

  attribute :trips do |user|
    user.trips.map do |trip|
      {
        name: trip.name,
        category: trip.category,
        duration: trip.duration.split(/, /).join(" - ")
      }
    end
  end

end
