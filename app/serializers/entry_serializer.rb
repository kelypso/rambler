class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :location, :meals, :activities, :encounters, :lowlight, :delight, :highlight, :objectives, :photo
  belongs_to :user, serializer: UserSerializer
  belongs_to :trip, serializer: TripSerializer
end
