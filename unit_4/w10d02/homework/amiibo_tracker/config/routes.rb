Rails.application.routes.draw do
  get '/games', to: 'games#index'
  get '/games/:id', to: 'games#show'
  post '/games', to: 'games#create'
  delete '/games/:id', to: 'games#delete'
  put '/games/:id', to: 'games#update'

  get '/amiibos', to: 'amiibos#index'
  get '/amiibos/:id', to: 'amiibos#show'
  post '/amiibos', to: 'amiibos#create'
  delete '/amiibos/:id', to: 'amiibos#delete'
  put '/amiibos/:id', to: 'amiibos#update'

end
