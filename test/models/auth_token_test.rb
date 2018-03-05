require 'test_helper'

class AuthTokenTest < ActiveSupport::TestCase

  test "It has the secret_key_base ass the key" do
    assert AuthToken.key == Rails.application.secrets.secret_key_base
  end

  test "It converts a User object into a JWT string" do
    user = create(:user)
    result = AuthToken.token(user)
    assert result.class == String
  end

  test "It parse a JWT string into a User object" do
    user = create(:user)
    token = AuthToken.token(user)
    result = AuthToken.verify(token)
    assert result == user
  end
  
end
