Types::AuthenticationType = GraphQL::ObjectType.define do
  name "Authentication"
  field :token, types.String
  field :errors, types[types.String]
end
