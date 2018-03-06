require 'test_helper'

class UserServicesTest < ActionDispatch::IntegrationTest

  test "It loads the Users::Services module" do
    assert Services::Users::AuthenticateUser.new.perform == "Foo"
  end

end
