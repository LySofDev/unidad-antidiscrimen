require 'test_helper'

class GraphqlTest < ActionDispatch::IntegrationTest

  test "the testField" do
    query = "
      query {
        testField
      }
    "
    result = UadServerSchema.execute(
      query,
      context: {},
      variables: {}
    )
    assert result["data"]["testField"] == "Hello World!"
  end

  test "currentUser when Authorization header included" do
    user = create(:user)
    query = "
      query {
        currentUser {
          email
          errors
        }
      }
    "
    result = UadServerSchema.execute(
      query,
      context: { current_user: user },
      variables: {}
    )
    assert result["data"] != nil
    assert result["data"]["currentUser"] != nil
    assert result["data"]["currentUser"]["email"] == user.email
  end

  test "currentUser when Authorization header not included" do
    query = "
      query {
        currentUser {
          email
          errors
        }
      }
    "
    result = UadServerSchema.execute(
      query,
      context: {},
      variables: {}
    )
    assert result["data"] != nil
    assert result["data"]["currentUser"] != nil
    assert result["data"]["currentUser"]["email"] == nil
    assert result["data"]["currentUser"]["errors"] == ["User not found."]
  end

end
