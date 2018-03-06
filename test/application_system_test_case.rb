require "test_helper"

Capybara.app_host = "http://localhost:3000"
Capybara.server_host = "localhost"
Capybara.server_port = "3000"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :firefox, screen_size: [375, 667]
end
