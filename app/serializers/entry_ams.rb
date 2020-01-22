class EntrySerializer < ActiveModel::Serializer
  attributes :date, :location, :meals, :activities, :encounters, :lowlight, :delight, :highlight, :objectives, :photo
  has_one :user
  has_one :trip

  def initialize(entry_obj)
    @entry = entry_obj
  end

  def to_serialized_json 
    @entry.to_json(:include => {
        :user => {:except => [:id, :password_digest, :created_at, :updated_at]},
        :trip => {:except => [:id, :user_id, :created_at, :updated_at]}
    }, :except => [:id, :user_id, :trip_id, :created_at, :updated_at])
  end
end