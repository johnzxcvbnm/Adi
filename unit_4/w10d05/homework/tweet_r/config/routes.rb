Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

  get '/tweets', to: 'tweets#index'
  get '/tweets/:id', to: 'tweets#show'
  post '/tweets', to: 'tweets#create'
  delete '/tweets/:id', to: 'tweets#delete'
  put '/tweets/:id', to: 'tweets#update'

  get '/likes', to: 'likes#index'
  get '/likes/:id', to: 'likes#show'
  post '/likes', to: 'likes#create'
  delete '/likes/:id', to: 'likes#delete'
  put '/likes/:id', to: 'likes#update'
end
