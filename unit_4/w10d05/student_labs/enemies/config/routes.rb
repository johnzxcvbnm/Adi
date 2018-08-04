Rails.application.routes.draw do
  get '/superheros', to: 'superheros#index'
  get '/superheros/:id', to: 'superheros#show'
  post '/superheros', to: 'superheros#create'
  put '/superheros/:id', to: 'superheros#update'
  delete '/superheros/:id', to: 'superheros#delete'

  get '/scientists', to: 'scientists#index'
  get '/scientists/:id', to: 'scientists#show'
  post '/scientists', to: 'scientists#create'
  put '/scientists/:id', to: 'scientists#update'
  delete '/scientists/:id', to: 'scientists#delete'

  get '/links', to: 'links#index'
  get '/links/:id', to: 'links#show'
  post '/links', to: 'links#create'
  put '/links/:id', to: 'links#update'
  delete '/links/:id', to: 'links#delete'
end
