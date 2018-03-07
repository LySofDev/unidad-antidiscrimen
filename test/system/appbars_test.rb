require "application_system_test_case"

class AppbarsTest < ApplicationSystemTestCase

  test "The AppBar has the title and a logo" do
    visit root_url
    assert (page.has_css? "img.app-logo"), "App Logo not visible"
    assert (page.has_css? ".app-title"), "App title not found."
    assert (page.has_content? "Unidad Antidiscrimen"), "App Title not found."
  end

end
