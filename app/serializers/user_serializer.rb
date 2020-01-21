class UserSerializer < ActiveModel::Serializer
  attributes :name, :email, :username
  has_many :parks
  has_many :entries

  def initialize(user_obj)
    @user = user_obj
  end

  def to_serialized_json 
    @user.to_json(:include => {
        :trips => {:except => [:id, :user_id, :created_at, :updated_at]},
        :entries => {:except => [:id, :user_id, :trip_id, :created_at, :updated_at]}
    }, :except => [:id, :password_digest, :created_at, :updated_at])
  end
end