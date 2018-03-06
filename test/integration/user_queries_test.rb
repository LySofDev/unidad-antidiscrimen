require 'test_helper'

class UserQueriesTest < ActionDispatch::IntegrationTest

  test "currentUser when Authorization header included" do
    user = create(:user)
    result = execute_query({
      context: { current_user: user },
      query: "
        query {
          currentUser {
            email
            errors
          }
        }
      "
    })
    assert result["data"], "No data"
    assert result["data"]["currentUser"], "No query"
    assert result["data"]["currentUser"]["email"] == user.email, "Incorrect email"
  end

  test "currentUser when Authorization header not included" do
    result = execute_query({
      query: "
        query {
          currentUser {
            email
            errors
          }
        }
      "
    })
    assert result["data"], "No data"
    assert result["data"]["currentUser"], "No query"
    assert_not result["data"]["currentUser"]["email"], "Email received"
    assert result["data"]["currentUser"]["errors"] == ["User not found."], "No errors received"
  end

  test "authenticateUser when Authorization header not included" do
    user = create(:user)
    result = execute_query({
      variables: { "email" => user.email, "password" => user.password },
      query: "
        mutation authenticateUser(
          $email: String!,
          $password: String!
        ){
          authenticateUser(
            email: $email,
            password: $password
          ) {
            token
            errors
          }
        }
      ",
    })
    assert result["data"], "No data received"
    assert result["data"]["authenticateUser"], "No mutation received"
    token = result["data"]["authenticateUser"]["token"]
    assert token == AuthToken.token(user), "Invalid token"
  end

  private

  def execute_query(opts)
    UadServerSchema.execute(
      opts[:query] || "",
      context: opts[:context] || {},
      variables: opts[:variables] || {}
    )
  end

end
