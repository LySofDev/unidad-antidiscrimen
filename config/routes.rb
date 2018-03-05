Rails.application.routes.draw do
  get 'client', to: 'development#react', as: 'client_delivery'
  root 'development#index'
end
