class Mutations::AuthenticateUser < GraphQL::Function

  argument :email, !types.String
  argument :password, !types.String

  type Types::AuthenticationType

  def call(obj, args, ctx)
    Services::Users::AuthenticateUser.new(args).perform
  end
  
end
