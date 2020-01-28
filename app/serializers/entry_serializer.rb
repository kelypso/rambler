class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :location, :meals, :activities, :encounters, :lowlight, :delight, :highlight, :objectives, :photo
end
