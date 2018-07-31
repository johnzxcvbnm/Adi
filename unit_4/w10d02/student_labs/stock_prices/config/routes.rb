Rails.application.routes.draw do
  get '/stocks', to: 'stocks#index'
  get '/stocks/:id', to: 'stocks#show'
  post '/stocks', to: 'stocks#create'
  delete '/stocks/:id', to: 'stocks#delete'
  put '/stocks/:id', to: 'stocks#update'

  get '/prices', to: 'prices#index'
  get '/prices/:id', to: 'prices#show'
  post '/prices', to: 'prices#create'
  delete '/prices/:id', to: 'prices#delete'
  put '/prices/:id', to: 'prices#update'
end
