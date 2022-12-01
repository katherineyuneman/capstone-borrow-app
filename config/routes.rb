Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :titles, only: [:index, :show]

  resources :authors, only: [:index, :show] do
    resources :titles, only: [:index]
  end

  resources :rentals
  resources :book_rentals, only: [:destroy]

  post '/titles_books', to: 'titles#titles_books'

   # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
