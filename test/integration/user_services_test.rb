require 'test_helper'

class UserServicesTest < ActionDispatch::IntegrationTest

  test "AuthenticateUser with email and password" do
    user = create(:user)
    token = AuthToken.token(user)
    params = { email: user.email, password: user.password }
    payload = Services::Users::AuthenticateUser.new(params).perform
    assert payload.token, "Token was not received"
    assert payload.errors.empty?, "Errors were received"
  end

  test "AuthenticateUser with invalid password" do
    user = create(:user)
    token = AuthToken.token(user)
    params = { email: user.email, password: "invalid" }
    payload = Services::Users::AuthenticateUser.new(params).perform
    assert_not payload.token, "Token was received"
    assert payload.errors.any?, "No errors were received"
  end

  test "AuthenticateUser with invalid email" do
    user = create(:user)
    token = AuthToken.token(user)
    params = { email: "invalid", password: "password" }
    payload = Services::Users::AuthenticateUser.new(params).perform
    assert_not payload.token, "Token was received"
    assert payload.errors.any?, "No errors were received"
  end

  test "RegisterUser with valid information" do
    params = attributes_for(:user)
    payload = Services::Users::RegisterUser.new(params).perform
    assert payload.user, "No user was received."
    assert payload.user.persisted?, "User was created but not saved."
    assert payload.errors.empty?, "Errors were received."
  end

end
