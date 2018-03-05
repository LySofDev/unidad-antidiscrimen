require 'test_helper'

class DevelopmentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get development_index_url
    assert_response :success
  end

end
