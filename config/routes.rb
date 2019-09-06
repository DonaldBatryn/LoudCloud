Rails.application.routes.draw do
  
 
  
  
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show, :index] do
      get 'search', on: :collection

    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy, :index] do
      get 'search', on: :collection
      resources :comments, only: [:create, :destroy]
    end
    
    resources :playlists, only: [:create, :show, :update, :destroy, :index]
    resources :playlist_songs, only: [:create, :index, :show, :destroy]
  end
  
  
end
