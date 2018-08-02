Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

  get '/photos', to: 'photos#index'
  get '/photos/:id', to: 'photos#show'
  post '/photos', to: 'photos#create'
  delete '/photos/:id', to: 'photos#delete'
  put '/photos/:id', to: 'photos#update'
end
