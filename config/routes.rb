Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "/login", to: "sessions#create"
      resources :users do
        resources :trips do 
          resources :entries 
        end
      end
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
