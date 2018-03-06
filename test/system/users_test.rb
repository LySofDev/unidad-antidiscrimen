require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase

  test "User can register in" do
    user = build(:user)
    visit new_user_registration_url
    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    fill_in 'Password Confirmation', with: user.password_confirmation
    click_on 'Sign Up'
    assert_not (page.has_content? 'errors prohibited this user from being saved')
    assert (page.has_content? 'Welcome! You have signed up successfully.')
  end

  test "User can sign in" do
    user = create(:user)
    visit new_user_session_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_on 'Sign In'
    assert_not (page.has_content? 'Invalid email or password'), "Errors ocurred in the form"
    assert (page.has_content? 'Signed in successfully.'), "Flash was not shown."
  end

  test "User can sign in on the React client" do
    user = create(:user)
    visit client_delivery_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_on 'Sign In'
    assert_not (page.has_content? 'Invalid email or password'), "Errors ocurred in the form"
    assert (page.has_content? 'Signed in successfully.'), "Flash was not shown."
  end

  test "User cannot sign in with invalid credentials on React client" do
    user = create(:user)
    visit client_delivery_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: "invalid"
    click_on 'Sign In'
    assert (page.has_content? 'Invalid email or password'), "Errors didn't ocurrin the form"
    assert_not (page.has_content? 'Signed in successfully.'), "Flash was shown."
  end
end
