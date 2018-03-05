require "application_system_test_case"

class ClientDeliveriesTest < ApplicationSystemTestCase
  # test "visiting the index" do
  #   visit client_deliveries_url
  #
  #   assert_selector "h1", text: "ClientDelivery"
  # end
  test "visit the React client" do
    visit client_delivery_url
    assert_selector "div", text: "Hello React!"
  end
end
