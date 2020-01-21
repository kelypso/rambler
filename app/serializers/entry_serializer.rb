class EntrySerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :meals, :activities, :encounters, :lowlight, :delight, :highlight, :objectives, :photo
end
