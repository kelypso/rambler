class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :username, :trips, :entries
  #has_many :trips, serializer: TripSerializer
  #has_many :entries, serializer: EntrySerializer
end
