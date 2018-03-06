require "application_system_test_case"

class GraphiQLsTest < ApplicationSystemTestCase
  test "visit the graphiql console" do
    visit graphiql_rails_url
    assert_selector "a", text: "Prettify"
    assert_selector "a", text: "History"
  end
end
