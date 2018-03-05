require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "The new user generator" do
    user = build(:user)
    assert user.valid?
    other_user = build(:other_user)
    assert other_user.valid?
  end

  test "User has a first name" do
    user = build(:user, first_name: nil)
    assert user.invalid?
    assert user.errors.keys.include? :first_name
    user.first_name = build(:user).first_name
    user.valid?
  end

  test "User has a last name" do
    user = build(:user, last_name: nil)
    assert user.invalid?
    assert user.errors.keys.include? :last_name
    user.last_name = build(:user).last_name
    user.valid?
  end

  test "User has a unique email" do
    other_user = create(:other_user)
    user = build(:user, email: nil)
    assert user.invalid?
    assert user.errors.keys.include? :email
    user.email = other_user.email
    assert user.invalid?
    assert user.errors.keys.include? :email
    user.email = build(:user).email
    assert user.valid?
  end

  test "User has a password and password confirmation" do
    user = build(:user, password: nil, password_confirmation: nil)
    assert user.invalid?
    assert user.errors.keys.include? :password
    user.password = "foo"
    user.password_confirmation = "bar"
    assert user.invalid?
    assert user.errors.keys.include? :password_confirmation
    user.password = build(:user).password
    user.password_confirmation = build(:user).password_confirmation
    assert user.valid?
  end

end
