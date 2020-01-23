class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :duration
  # has_one :user, serializer: UserSerializer
  # has_many :entries, serializer: EntrySerializer

  attribute :entries do |trip|
    trip.entries.map do |entry|
      {
        date: entry.date,
        location: entry.location,
        meals: entry.meals,
        activities: entry.activities,
        encounters: entry.encounters,
        lowlight: entry.lowlight,
        delight: entry.delight,
        highlight: entry.highlight,
        objectives: entry.objectives,
        photo: entry.photo
      }
    end
  end

end
