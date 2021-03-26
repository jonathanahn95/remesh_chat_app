Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'conversations/search', to: 'conversations#search'
      get 'conversations/dropdown', to: 'conversations#dropdown'
      get 'messages/dropdown', to: 'messages#dropdown'

      resources :conversations, only: [:create, :index, :show] do
        resources :messages, only: [:index]
      end
      resources :messages, only: [:create, :show] do
        resources :thoughts, only: [:index]
      end
      resources :thoughts, only: [:create]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end