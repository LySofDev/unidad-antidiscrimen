require 'application_system_test_case'

class UsersTest < ApplicationSystemTestCase

  test 'User can sign in' do
    user = create(:user)
    visit new_user_session_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_on 'Sign In'
    assert_not (page.has_content? 'Invalid email or password'), 'Errors ocurred in the form'
    assert_selector 'div', text: 'Unidad Antidiscrimen'
    # assert (page.has_content? 'Signed in successfully.'), 'Flash was not shown.'
  end

  test 'User cannot sign in with invalid credentials' do
    user = create(:user)
    visit new_user_session_url
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'invalid'
    click_on 'Sign In'
    assert (page.has_css? 'div.errors'), 'Errors not being shown.'
    assert (page.has_content? 'Invalid email or password'), 'Errors didn\'t ocurrin the form'
  end

  test 'User can sign up' do
    user = build(:user)
    visit new_user_session_url
    click_on 'Not registered yet?'
    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    fill_in 'Password Confirmation', with: user.password
    click_on 'Sign Up'
    assert_not (page.has_css? 'div.errors'), 'Errors being shown'
    assert (page.has_content? 'Signed up successfully!'), 'Sign in was not successful.'
  end
end
