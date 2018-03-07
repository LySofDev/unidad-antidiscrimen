Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :authenticateUser, function: Mutations::AuthenticateUser.new

  field :registerUser, function: Mutations::RegisterUser.new

end
