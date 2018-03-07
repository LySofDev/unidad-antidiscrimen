class Mutations::RegisterUser < GraphQL::Function

  argument :firstName, !types.String
  argument :lastName, !types.String
  argument :email, !types.String
  argument :password, !types.String
  argument :passwordConfirmation, !types.String

  type Types::AuthenticationType

  def call(obj, args, ctx)
    payload = Services::Users::RegisterUser.new(sanitize(args)).perform
    return OpenStruct.new({ errors: payload.errors }) if payload.errors.any?
    return OpenStruct.new({ token: AuthToken.token(payload.user) })
  end

  private

  def sanitize(args)
    args.keys.inject({}) do |params, key|
      params[key.underscore] = args[key]
      params
    end
  end

end
