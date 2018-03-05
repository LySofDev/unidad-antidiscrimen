Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # TODO: remove me
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end

  field :currentUser, Types::UserType do
    description "The currently authenticated user"
    resolve -> (obj, args, ctx) do
      user = ctx[:current_user]
      return user if user
      return OpenStruct.new({ errors: ["User not found."] })
    end
  end

end
