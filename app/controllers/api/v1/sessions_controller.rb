class Api::V1::SessionsController < ApplicationController
    def create
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
          session[:user_id] = @user.id
          render json: @user
          #render json: UserSerializer.new(@user), status: :ok
        else
          render json: {
            error: "Invalid Credentials"
          }
        end
      end

    def get_current_user
        if logged_in? 
            render json: current_user
        else
            render json: {
              error: "No User Logged In"
            }
        end
    end

    def destroy 
        session.clear
        render json: {
            notice: "Successfully Logged Out"
        }, status: 200
    end

end
