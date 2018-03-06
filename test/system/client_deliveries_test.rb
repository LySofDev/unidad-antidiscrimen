require "application_system_test_case"

class ClientDeliveriesTest < ApplicationSystemTestCase

  test "visit the React client" do
    visit root_url
    assert_selector "div", text: "Unidad Antidiscrimen"
  end

end
