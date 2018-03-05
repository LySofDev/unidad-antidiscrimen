require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase

  test "User can register in" do
    visit new_user_registration_url
    fill_in 'Fist Name', with: 'Esteban'
    fill_in 'Last Name', with: 'Hernandez'
    fill_in 'Email', with: 'esteban.hernandez@gmail.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_on 'Sign Up'
    assert_select 'div.flash.flash-success', "Registration completed!"
  end

end
