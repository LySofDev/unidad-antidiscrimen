require "application_system_test_case"

class FlashesTest < ApplicationSystemTestCase

  test "It shows a notice flash" do
    visit test_notice_flash_url
    assert (page.has_content? "This is notice flash."), "No flash message."
  end

  test "It shows an alert flash" do
    visit test_alert_flash_url
    assert (page.has_content? "This is alert flash."), "No flash message."
  end

end
