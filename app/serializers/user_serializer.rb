class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :username, :password
  has_many :trips, serializer: TripSerializer
  has_many :entries, serializer: EntrySerializer
end
