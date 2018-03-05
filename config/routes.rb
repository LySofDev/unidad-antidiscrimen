Rails.application.routes.draw do
  devise_for :users
  get 'client', to: 'development#react', as: 'client_delivery'
  root 'development#index'
end
