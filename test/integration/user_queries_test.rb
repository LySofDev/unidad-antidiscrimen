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

  test "authenticateUser when Authorization with valid credentials" do
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

  test "authenticateUser when Authorization with invalid credentials" do
    user = create(:user)
    result = execute_query({
      variables: { "email" => user.email, "password" => "invalid" },
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
    assert_not result["data"]["authenticateUser"]["token"], "Invalid token"
    assert result["data"]["authenticateUser"]["errors"], "No errors received"
  end

  test "registerUser with valid credentials" do
    user = build(:user)
    result = execute_query({
      variables: {
        "firstName" => user.first_name,
        "lastName" => user.last_name,
        "email" => user.email,
        "password" => user.password,
        "passwordConfirmation" => user.password_confirmation
      },
      query: "
        mutation registerUser(
          $email: String!,
          $firstName: String!,
          $lastName: String!,
          $password: String!,
          $passwordConfirmation: String!
        ) {
          registerUser(
            email: $email,
            password: $password,
            passwordConfirmation: $passwordConfirmation,
            firstName: $firstName,
            lastName: $lastName
          ) {
            token
            errors
          }
        }
      "
    })
    assert result["data"], "No data received."
    assert result["data"]["registerUser"], "No query received"
    token = result["data"]["registerUser"]["token"]
    assert token, "No token received"
    user = User.find_by_email(user.email)
    assert user, "User not registered"
    assert token == AuthToken.token(user), "Invalid token created"
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
