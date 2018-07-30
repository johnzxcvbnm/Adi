Rails.application.routes.draw do
  get '/gifts', to: 'gifts#index'
  get '/gifts/random', to: 'gifts#random'
  get '/gifts/:id', to: 'gifts#show'
  post '/gifts', to: 'gifts#create'
  delete '/gifts/:id', to: 'gifts#delete'
  put '/gifts/:id', to: 'gifts#update'
end
