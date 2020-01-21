class ApplicationController < ActionController::API
    # Mocked version of "logged in" user
    helpers do 
        def current_user 
            User.first
        end

        def logged_in?
            !!current_user
        end
    end
end
