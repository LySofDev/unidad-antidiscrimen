require "application_system_test_case"

class GraphiQLsTest < ApplicationSystemTestCase
  # test "visiting the index" do
  #   visit graphiqls_url
  #
  #   assert_selector "h1", text: "GraphiQL"
  # end
  test "visit the graphiql console" do
    visit graphiql_rails_url
    assert_selector "a", "Prettify"
    assert_selector "a", "History"
  end
end
