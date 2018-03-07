Rails.application.routes.draw do

  unless Rails.env.production?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  devise_for :users

  get 'client', to: 'development#react', as: 'client_delivery'
  get 'flash/notice', to: 'development#notice_flash', as: 'test_notice_flash'
  get 'flash/alert', to: 'development#alert_flash', as: 'test_alert_flash'
  
  root 'development#index'
end
