require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "The new user generator" do
    user = build(:user)
    assert user.valid?
  end

  test "User has a first name" do

  end

  test "User has a last name" do

  end

  test "User has an email" do

  end

  test "User has a password and password confirmation" do

  end

end
