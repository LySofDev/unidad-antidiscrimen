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

end
