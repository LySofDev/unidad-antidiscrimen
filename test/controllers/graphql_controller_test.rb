require 'test_helper'

class GraphqlControllerTest < ActionDispatch::IntegrationTest

  test "It should provide the graphql endpoint" do
    post graphql_url
    assert_response :success
  end

end
