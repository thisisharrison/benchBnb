Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create, :show] 
    resources :reviews, only: [:create]
  end
end
