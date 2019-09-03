Rails.application.routes.draw do
  
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:create]
    end
    resources :playlists, only: [:create, :show, :update, :destroy, :index]
  end
  resources :comments, only: [:destroy]
  
end
