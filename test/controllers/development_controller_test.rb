require 'test_helper'

class DevelopmentControllerTest < ActionDispatch::IntegrationTest

  test "should get react client" do
    get client_delivery_url
    assert_response :success
  end

end
