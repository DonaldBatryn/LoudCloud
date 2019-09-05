Rails.application.routes.draw do
  
 
  
  
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:create]
    end
    resources :artists, only: [:create, :update, :index, :show, :destroy]
    resources :playlists, only: [:create, :show, :update, :destroy, :index]
    resources :playlist_songs, only: [:create, :index, :show, :destroy]
  end
  resources :comments, only: [:destroy]
  
end
