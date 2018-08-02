Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

  get '/books', to: 'books#index'
  get '/books/:id', to: 'books#show'
  post '/books', to: 'books#create'
  delete '/books/:id', to: 'books#delete'
  put '/books/:id', to: 'books#update'

  get '/reviews', to: 'reviews#index'
  get '/reviews/:id', to: 'reviews#show'
  post '/reviews', to: 'reviews#create'
  delete '/reviews/:id', to: 'reviews#delete'
  put '/reviews/:id', to: 'reviews#update'

end
