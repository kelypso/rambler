class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :duration
  has_one :user, serializer: UserSerializer
  has_many :entries, serializer: EntrySerializer
end
